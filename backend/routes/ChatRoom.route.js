import express from "express";

const router = express.Router();

router.post("/create-newChat", createNewChatController);

export default router;
