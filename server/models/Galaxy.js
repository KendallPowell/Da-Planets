import { Schema } from "mongoose"


export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number }
}, { timestamps: true, toJSON: { virtuals: true } })