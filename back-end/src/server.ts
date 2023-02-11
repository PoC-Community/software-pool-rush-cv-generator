import bodyParser from 'body-parser';
import express from 'express';
import { host, port } from './config';
import jwtRoutes from './endpoints/jwt';
const app = express()

app.use(bodyParser.json())
app.use(jwtRoutes);
app.listen(port, () => {
    console.log(`Server listening on http://${host}:${port}/`);
});