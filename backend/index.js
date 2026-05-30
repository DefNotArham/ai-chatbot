import express from "express";
import dotenv from "dotenv";

import connectDb from "./db/connectDb.js";
import ChatRoomRoutes from "./routes/ChatRoom.route.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
connectDb();

app.use(express.json());
app.use("/Chatroom", ChatRoomRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
