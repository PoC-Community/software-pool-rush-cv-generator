import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { saltPassword, secretJwt } from '../config';
import { createUser, getUserFromEmail } from '../models/user';
import { validatorLogin, validatorRegister } from '../schema/user';

const router = express.Router();

const checkRegister = (req: Request, res: Response, next: NextFunction) => {
  if (validatorRegister.safeParse(req.body).success) {
    next();
  } else {
      res.status(StatusCodes.BAD_REQUEST).send('Bad request');
  }
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  if (validatorLogin.safeParse(req.body).success) {
    next();
  } else {
      res.status(StatusCodes.BAD_REQUEST).send('Bad request');
  }
}

router.post('/auth/login', checkLogin, async (req, res) => {

  const inputUser = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, saltPassword)
  };

  const matchedUser = await getUserFromEmail( inputUser.email );

  if (!matchedUser) {
      res.status(StatusCodes.NOT_FOUND).send('User not found');
      return;
  }

  if (matchedUser?.password != inputUser.password) {
      res.status(StatusCodes.FORBIDDEN).send('Wrong password');
      return;
  }

  const accessToken = jwt.sign({ email: matchedUser?.email }, secretJwt, { expiresIn: '10h' });
  const response = {
      accessToken
  };

  res.status(StatusCodes.OK).send(response);
});

router.post('/auth/register', checkRegister, async (req: Request, res: Response) => {
  const hash = bcrypt.hashSync(req.body.password, saltPassword);
  const user: Omit<User, "uuid"> = {
      email: req.body.email,
      password: hash
  };
  try {
    await createUser(user);
  } catch (error) {
    res.status(StatusCodes.CONFLICT).send({
      error: "User's already registred"
    });
    return;
  }
  const accessToken = jwt.sign({ email: user.email }, secretJwt, { expiresIn: '10h' });
  const response = {
      accessToken
  }
  res.status(StatusCodes.CREATED).send(response);
});

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const tokenHeader = req.header("authorization")?.split('Bearer ')[1];
  if (!tokenHeader) {
      res.status(StatusCodes.BAD_REQUEST).send('No bearer found');
    return;
  }
  if (!!tokenHeader) {
    try {
      await jwt.verify(tokenHeader, secretJwt, async (err, decoded) => {
          if (err || !decoded) {
              res.status(StatusCodes.UNAUTHORIZED).send('Failed to validate Token');
              return;
          }
          const email = typeof decoded === "string" ? decoded : decoded.email;
          const matchedUser = await getUserFromEmail(email);
          if (!matchedUser)
              res.status(StatusCodes.NOT_FOUND).send('Uknown user');
          // @ts-ignore
          req.user = matchedUser;
          next();
      });
    } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED).send('Failed to validate Token');
      return;
    }
  }
}


export default router;