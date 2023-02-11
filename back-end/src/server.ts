import bodyParser from 'body-parser';
import express from 'express';
import { host, port } from './config';

import prisma from './client';

// Declare an asynchronous main
async function main() {
    const app = express()

    app.use(bodyParser.json())
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
