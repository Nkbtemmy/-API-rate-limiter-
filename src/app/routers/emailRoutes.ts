import express from "express";
import EmailController from "../controllers/emailController";
import { protectedRoute } from "../middlewares/protected";
import checkUserLimits from "../middlewares/rateLimitRoutes";

const router = express();

router.post("/send", protectedRoute, checkUserLimits, EmailController.sendEmail);

export default router;
