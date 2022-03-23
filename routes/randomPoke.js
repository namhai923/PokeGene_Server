import express from "express";
import Pokemon from "../models/Pokemon.js";
import { getPokeDescription, getPokeImage } from "../pokeData.js";
import randomPokemon from "../randomPokemon.js";

let router = express.Router();

router.get("/", async (req, res) => {
  try {
    let types = req.query.types;
    let myPokemon = await randomPokemon(types);
    if (myPokemon) {
      let savedPokemon = await Pokemon.findOne({ name: myPokemon });
      if (!savedPokemon) {
        let pokeImage = await getPokeImage(myPokemon);
        let pokeDescription = await getPokeDescription(myPokemon);
        let newPokemon = new Pokemon({
          types,
          name: myPokemon,
          image: pokeImage,
          description: pokeDescription,
        });
        savedPokemon = await newPokemon.save();
      }
      res.status(200).json(savedPokemon);
    } else {
      res.status(200).json({ notAvailable: "There is no pokemon available" });
    }
  } catch (error) {
    res.status(500).json({ ErrorMessage: error.message });
  }
});

export default router;
