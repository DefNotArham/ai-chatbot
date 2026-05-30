import express from "express";

import createNewChatController from "../controllers/ChatRoom/createNewChat.controller.js";

const router = express.Router();

router.post("/create-newChat", createNewChatController);

export default router;
