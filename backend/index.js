import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDb from "./db/connectDb.js";
import ChatRoomRoutes from "./routes/ChatRoom.route.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/chatroom", ChatRoomRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
