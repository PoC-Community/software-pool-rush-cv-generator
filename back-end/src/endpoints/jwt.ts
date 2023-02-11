import { getUser, isRegistered, User } from '../utils';
import {validatorLogin, validatorRegister} from '../schema'
import {StatusCodes} from 'http-status-codes';
import express, {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken'
import { secretJwt, saltPassword } from '../config';
import bcrypt from 'bcrypt';

// Storing users in an array for simplicity
const users: User[] = [
    {
        email: "example@blabla.fr",
        password: bcrypt.hashSync("motDePasseUltraSécurisé", saltPassword)
    },
    {
        email: "fsdnk@hsdjkfh.fr",
        password: bcrypt.hashSync("dsfsjdkfsjdfs", saltPassword)
    },
    {
        email: "dfknjsd@sdfjkk.org",
        password: bcrypt.hashSync("873628923", saltPassword)
    }
];

const router = express.Router();

const checkRegister = (req: Request, res: Response, next: NextFunction) => {
    if (validatorRegister.safeParse(req.body).success) {
        if (isRegistered(users, req.body.email)) {
            res.status(StatusCodes.FORBIDDEN).send('User already exists');
        } else {
            next();
        }
    } else {
        res.status(StatusCodes.BAD_REQUEST).send('Bad request');
    }
}

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
    if (validatorLogin.safeParse(req.body).success) {
        if (!isRegistered(users, req.body.email)) {
            res.status(StatusCodes.FORBIDDEN).send('User not found');
        } else {
            next();
        }
    } else {
        res.status(StatusCodes.BAD_REQUEST).send('Bad request');
    }
}

router.post('/jwt/login', checkLogin, (req, res) => {
    const inputUser = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, saltPassword)
    };
    const matchedUser = getUser(users, inputUser.email);
    if (matchedUser?.password != inputUser.password) {
        res.status(StatusCodes.FORBIDDEN).send('Wrong password');
    }
    const accessToken = jwt.sign({ email: matchedUser?.email }, secretJwt, { expiresIn: '1m' });
    const response = {
        accessToken,
        user: {
            email: matchedUser?.email,
            password: matchedUser?.password
        },
        message: "Successful login"
    }
    res.status(StatusCodes.OK).send(response);
});

router.post('/jwt/register', checkRegister, (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, saltPassword);
    const user: User = {
        email: req.body.email,
        password: hash
    };
    const accessToken = jwt.sign({ email: user.email }, secretJwt, { expiresIn: '10h' });
    users.push({
        email: user.email,
        password: user.password
    })
    const response = {
        accessToken,
        user: {
            email: user.email,
            password: user.password
        },
        message: "User successfully created"
    }
    res.status(StatusCodes.CREATED).send(response);
});

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const tokenHeader = req.header("authorization")?.split('Bearer ')[1];
    if (!tokenHeader)
        res.status(StatusCodes.BAD_REQUEST).send('No bearer found');
    if (!!tokenHeader) {
        jwt.verify(tokenHeader, secretJwt, (err, decoded) => {
            if (err || !decoded) {
                console.log(err);
                res.status(StatusCodes.UNAUTHORIZED).send('Failed to validate Token');
                return;
            }
            const email = typeof decoded === "string" ? decoded : decoded.email;
            const matchedUser = getUser(users, email);
            if (!matchedUser)
                res.status(StatusCodes.NOT_FOUND).send('Uknown user');
            // @ts-ignore
            req.user = matchedUser;
            next();
        });
    }
}

router.get('/jwt/me', checkAuth, (req, res) => {
    const response = {
        user: {
            //@ts-ignore
            email: req.user.email,
            //@ts-ignore
            password: req.user.password
        },
        message: "User found"
    }
    res.status(StatusCodes.OK).send(response);
});

export default router;