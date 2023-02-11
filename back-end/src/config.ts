import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

export const port: number = env.get('SERVER_PORT').required(true).asInt();
export const host: string = env.get('SERVER_HOST').required(true).asString();
export const secretJwt: string =  env.get('SECRET_JWT').required(true).asString();
export const saltPassword: string = env.get('SALT_PASSWORD').required(true).asString();