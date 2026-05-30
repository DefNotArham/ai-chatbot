import express from "express";

import createNewChatController from "../controllers/ChatRoom/createNewChat.controller.js";
import loadChatsController from "../controllers/ChatRoom/loadChats.controller.js";

const router = express.Router();

router.get("/load-chats", loadChatsController);
router.post("/create-newChat", createNewChatController);

export default router;
