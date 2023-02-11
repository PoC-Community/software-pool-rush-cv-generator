import express from 'express';

const router = express.Router();

router.get('/home',(req, res ) =>{

    res.status(200);
})


export default router;