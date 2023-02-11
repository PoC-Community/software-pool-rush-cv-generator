import bodyParser from 'body-parser';
import cors from "cors";
import express from 'express';
import prisma from './client';
import { host, port } from './config';
import cvRouter from './endpoints/cv';
import userRouter from './endpoints/user';

// Declare an asynchronous main
async function main() {
    const app = express()
    app.use(cors());
    app.use(bodyParser.json())
    app.use(cvRouter);
    app.use(userRouter);
    app.listen(port, () => {
        console.log(`Server listening on http://${host}:${port}/`);
    });
}

// Run main
main()
  .catch((e) => {
    // Throw on error
    throw new Error(`Failed to initialize database: ${e}`);
  })
  .finally(async () => {
    // Disconnect client after main
    await prisma.$disconnect();
  });
