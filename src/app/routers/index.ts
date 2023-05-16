import express from "express";
import Response from "../utils/helpers/response";
const server = express();

server.get("/", (req, res) => {
  return Response.success(res, 200, {
    message: "Welcome to API Rate Limiter",
  });
});

export default server;
