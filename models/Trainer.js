import mongoose from "mongoose";

let TrainerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
});

export default mongoose.Model("Trainer", TrainerSchema);
