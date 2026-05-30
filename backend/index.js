import express from "express";
import dotenv from "dotenv";

import connectDb from "./db/connectDb.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
connectDb();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
