import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routers";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen({ port: PORT }, () =>
  process.stdout.write(`http://localhost:${PORT} \n`)
);
