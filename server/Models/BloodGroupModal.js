import mongoose from "mongoose";
import { collections } from "../Config/Collections.js";
const BloodGroupeModal = mongoose.Schema({
  name: { type: String, required: true },
});
export const BLOOD_GROUPE = mongoose.model(
  collections.BLOOD_GROUPE,
  BloodGroupeModal
);
