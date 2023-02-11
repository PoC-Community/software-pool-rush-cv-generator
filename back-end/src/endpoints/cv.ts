import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { createCv, deleteCv, getCv, getCvs } from '../models/cv';
import { validatorInputCreate } from '../schema/cv';

const router = express.Router();

router.post('/cv', async (req, res) => {
  if (validatorInputCreate.safeParse(req.body).success) {
    try {
      res.status(StatusCodes.OK).json(await createCv(req.body));
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false
      });
    }
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false
    });
  }
});

router.get('/cv/:uuid', async (req, res) => {
  try {
    const data = await getCv(req.params.uuid);
    if (data) {
      res.status(StatusCodes.OK).json(data);
    } else {
      res.status(StatusCodes.OK).json({
        success: false
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false
    });
  }
});

router.delete('/cv/:uuid', async (req, res) => {
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

router.get('/cvs', async (req, res) => {
  // integrate with real user id when creating the CV
  const uuidUser = "7982fcfe-5721-4632-bede-6000885be57d";
  res.status(StatusCodes.OK).json( await getCvs(uuidUser));
});

export default router;