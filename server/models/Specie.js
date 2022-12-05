import { Schema } from "mongoose";


export const SpecieSchema = new Schema({
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })