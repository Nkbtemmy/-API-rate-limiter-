import express from 'express';
import Smscontrollers from '../controllers/smsControllers';

const router = express();

router.post('/telesignal',Smscontrollers.telesignal);
router.post('/venage',Smscontrollers.venage);

export default router;
