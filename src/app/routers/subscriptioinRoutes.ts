import express from "express";
import SubscriptionControllers from "../controllers/subscriptionControllers";
import { protectedRoute } from "../middlewares/protected";

const router = express();


router.post("/", SubscriptionControllers.create);
router.get("/", SubscriptionControllers.getAll);
router.post("/:id", SubscriptionControllers.getOne);
router.post("/:id", protectedRoute, SubscriptionControllers.update);
router.post("/:id", protectedRoute, SubscriptionControllers.delete);


export default router;
