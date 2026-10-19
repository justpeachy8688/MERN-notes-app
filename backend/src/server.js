import express from "express";
//const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use (express.json()); // this missleware with parse the json bodies: req.body
app.use(rateLimiter);

/*
// simple custom middleware
app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
})
*/

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT);
    });
  });
/*
mongodb+srv://<db_username>:jVOqEqBf3tVIDeFh@cluster0.is7ffxr.mongodb.net/
 */
