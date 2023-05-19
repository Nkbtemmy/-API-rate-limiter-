import express from "express";
import Smscontrollers from "../controllers/smsControllers";
import { protectedRoute } from "../middlewares/protected";
import checkUserLimits from "../middlewares/rateLimitRoutes";

const router = express();

router.post(
  "/telesignal",
  protectedRoute,
  checkUserLimits,
  Smscontrollers.telesignal
);
router.post("/venage", protectedRoute, checkUserLimits, Smscontrollers.venage);

export default router;
