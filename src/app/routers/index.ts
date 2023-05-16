import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from '../docs';
import Response from "../utils/helpers/response";
const server = express();

server.get("/api/", (req, res) => {
  return Response.success(res, 200, {
    message: "Welcome to API Rate Limiter",
  });
});
server.use(
    `/api-docs`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerOptions),
  );

export default server;
