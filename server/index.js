import express, { application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 9000;

app.get("/", (req, res, next) => {
  res.send("Hello World");
});

app.listen(port);
