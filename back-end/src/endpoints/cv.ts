import axios from 'axios';
import express from 'express';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';
import mustache from 'mustache';
import { z } from 'zod';
import { gladiaApiKey } from '../config';
import { checkAuth } from '../endpoints/user';
import { createCv, deleteCv, getCv, getCvs } from '../models/cv';
import { getUser } from '../models/user';
import { informationObject, validatorInputCreate } from '../schema/cv';

const router = express.Router();

router.post('/cv', checkAuth, async (req, res) => {
  if (validatorInputCreate.safeParse(req.body).success) {
    try {
      //@ts-ignore
      res.status(StatusCodes.OK).json(await createCv(req.body, req.user.uuid));
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        message: false
      });
    }
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false
    });
  }
});

router.get('/cv/:uuid', checkAuth,  async (req, res) => {
  try {
    const data = await getCv(req.params.uuid);
    if (data) {
      res.status(StatusCodes.OK).json(data);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false
    });
  }
});

const generateResume = async (information: z.infer<typeof informationObject>) => {
  return await axios.post('https://api.gladia.io/text/text/gpt3/', {
    text: 'Generate a summary for a resume concerning a student with knowledge in react, typescript, Express and an experience in Software pool POC.'
  }, {
    headers: {
        'accept': 'application/json',
        'x-gladia-key': gladiaApiKey,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};

router.get('/cv/:uuid/render', async (req, res) => {
  try {
    const data = await getCv(req.params.uuid);
    if (data) {
      try {
        const templateContent = fs.readFileSync(`./src/templates/${data.templateName}.html`,{
          encoding:'utf8',
          flag:'r'
        });
        const information = data.information as z.infer<typeof informationObject>;
        const resume = await generateResume(information);
        const user = await getUser(data.uuidUser);
        const renderInfo = {
          resume: resume.data.prediction,
          email: user?.email,
          ...information
        };
          res.status(StatusCodes.OK).send(mustache.render(templateContent, renderInfo));
      } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          error
        });
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false
    });
  }
});

router.delete('/cv/:uuid', checkAuth, async (req, res) => {
  try {
    await deleteCv(req.params.uuid);
    res.status(StatusCodes.OK).json({
      success: true
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false
    });
  }
});

router.get('/cvs', checkAuth, async (req, res) => {
  // integrate with real user id when creating the CV
  // @ts-ignore
  res.status(StatusCodes.OK).json( await getCvs(req.user.uuid));
});

export default router;