import mongoose from "mongoose";

let pokemonSchema = new mongoose.Schema({
  types: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Pokemon", pokemonSchema);
