import express from "express";

import askAiController from "../controllers/Message/askAi.controller.js";

const router = express.Router();

router.post("/askAi/:chatroomId", askAiController);

export default router;
