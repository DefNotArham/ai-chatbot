import express from "express";

import loadChatsController from "../controllers/ChatRoom/loadChats.controller.js";

const router = express.Router();

router.get("/load-chats", loadChatsController);

export default router;
