import express from "express";

import loadChatsController from "../controllers/ChatRoom/loadChats.controller.js";
import createNewchatController from "../controllers/ChatRoom/createNewchat.controller.js";

const router = express.Router();

router.get("/load-chats", loadChatsController);
router.post("/create-chatroom", createNewchatController);

export default router;
