import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId


export const ColonySchema = new Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  planetId: { type: ObjectId, required: true, ref: 'Planet' },
  speciesId: { type: ObjectId, required: true, ref: 'Specie' }
}, { timestamps: true, toJSON: { virtuals: true } })