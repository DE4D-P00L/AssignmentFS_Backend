import express from "express";
import {
  getCardbyTitle,
  getCards,
  postCard,
} from "../controllers/card.controller.js";

const router = express.Router();

router.get("/", getCards);
router.post("/", postCard);
router.get("/:title", getCardbyTitle);

export default router;
