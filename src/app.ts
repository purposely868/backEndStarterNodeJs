import express from "express";

import { notFound } from "./middleware/not-found";
import apiRouter from "./routes/apiRouter";
import connectDB from "./db/connect";
import loggerMiddleware from "./middleware/logger.middleware";
import nsideModel from "./models/nsideM";
import onesideModel from "./models/onesideM";
//import dotenv from "dotenv";
// dotenv.config(); in case of using environment variables.

// import cors from "cors";
// app.use(cors());
// in case of using cors.
// https://expressjs.com/en/resources/middleware/cors.html
//https://www.npmjs.com/package/@typegoose/auto-increment

const app = express();

// General middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routers
app.use("/api/xyzN", apiRouter);

// Error handling middleware
app.use(notFound);

// Server + dbs connection start
async function start() {
  //const port = process.env.PORT || 3000; env port for later
  //const dbUrl = process.env.MONGO_URI; env url for attlas or other sources for later use.
  try {
    await connectDB("mongodb://localhost:27017/AdatbázisNeve");
    console.log(new Date());

    app.listen(5000, () => {
      console.log(
        `DB connection succesfull, Server Listening on port ${5000}...`
      );
    });
    nsideModel.init();
    onesideModel.init();
  } catch (error) {
    console.log(`Some Error Occured: ${error}`);
  }
}

start();
