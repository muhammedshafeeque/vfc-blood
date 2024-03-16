import mongoose from "mongoose";
import { collections } from "../Config/Collections.js";
const locationModal = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const LOCATION=mongoose.model(collections.LOCATIONS,locationModal)