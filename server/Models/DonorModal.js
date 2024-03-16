import mongoose from "mongoose";
import { collections } from "../Config/Collections.js";
const Donor = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    blood: {
      type: mongoose.Schema.ObjectId,
      ref: collections.BLOOD_GROUPE,
      required: true,
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: collections.LOCATIONS,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    lastDonate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      // ref: collections.AVAILABILITY,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const DONOR = mongoose.model(collections.DONOR, Donor);
