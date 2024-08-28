import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
    },
    description: { type: String, required: true, minlength: 2 },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

export default Card;
