import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/test', (req, res) => {
    res.render('login.html');
});

export default router;