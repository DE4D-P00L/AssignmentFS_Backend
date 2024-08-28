import { z } from "zod";
import Card from "../models/card.model.js";

// Zod schema for data validation
const cardSchema = z.object({
  title: z.string().trim().min(3, "Min length required > 2"),
  description: z.string().trim().min(3, "Min length required > 2"),
});
// Post card details (Add card)
const postCard = async (req, res) => {
  const { title, description } = req.body;
  // Data validation using cardSchema
  const isValidData = cardSchema.safeParse({ title, description });

  // Incase of validation error send error response
  if (!isValidData.success) {
    return res.status(422).json({
      error: "Please enter valid values",
      errors: isValidData.error.flatten().fieldErrors,
    });
  }

  // Else Create new Card in DB
  try {
    const card = await Card.create(isValidData.data);
    if (!card)
      return res.status(500).json({ error: "Failed, Please try again" });
    res.status(201).json(card);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server Error!" });
  }
};

// Get all cards
const getCards = async (req, res) => {
  try {
    const cards = await Card.find({}); // Fetch all cards
    res.status(200).json(cards);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server Error!" });
  }
};

// Get card by title
const getCardbyTitle = async (req, res) => {
  const { title } = req.params; // Get title from params
  const regexTitle = new RegExp(title, "i"); // Case insensitive regex for title
  try {
    const card = await Card.find({ title: regexTitle }); //Get card that contain the title passed in params
    if (!card)
      //If not found
      return res.status(404).json({ error: "No card found with given title!" });
    res.status(200).json(card);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Server Error!" });
  }
};

export { postCard, getCards, getCardbyTitle };
