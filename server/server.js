import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./Router/route.js";

import connect from "./database/conn.js";

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// Port
const port = process.env.PORT || 8080;

// Routes
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("Get request to the homepage");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server is connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Server is not connected");
    }
  })
  .catch((error) => console.log("Invalid Connection"));
