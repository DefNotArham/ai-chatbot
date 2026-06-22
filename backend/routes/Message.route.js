import express from "express";

import askAiController from "../controllers/Message/askAi.controller.js";

const router = express.Router();

router.post("/askAi", askAiController);

export default router;
