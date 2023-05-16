import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import apicache from "apicache";
import router from "./app/routers";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
const cache = apicache.middleware;

app.use(limiter);
app.use(cache("1 minutes"));

app.use(express.json());
app.use(cors());
app.use(router);

app.listen({ port: PORT }, () =>
  process.stdout.write(`http://localhost:${PORT} \n`)
);
