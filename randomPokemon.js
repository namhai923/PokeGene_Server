import pokeApi from "./api/pokeApi.js";
import SPECIAL_NAMES from "./SPECIAL_NAMES.js";

async function getPokemons(types) {
  try {
    let pokemons = Promise.all(
      types.map(async (type) => {
        let data = await pokeApi.getType(type);
        let { pokemon: pokeList } = data;
        return pokeList
          .map((pokemon) => pokemon.pokemon.name)
          .filter(
            (name) => !name.includes("-") || SPECIAL_NAMES.includes(name)
          );
      })
    );
    return pokemons;
  } catch (error) {
    throw error;
  }
}

function intersectPokes(pokeArr) {
  return pokeArr.reduce((previous, current) =>
    previous.filter((pokemon) => current.includes(pokemon))
  );
}

async function randomPokemon(selectedTypes) {
  try {
    let ftrPokes = await getPokemons(selectedTypes);
    if (selectedTypes.length === 2) {
      ftrPokes = intersectPokes(ftrPokes);
    } else {
      ftrPokes = ftrPokes[0];
    }
    if (ftrPokes.length === 0) {
      return null;
    }
    let myPokemon = ftrPokes[Math.trunc(Math.random() * ftrPokes.length)];
    return myPokemon;
  } catch (error) {
    throw error;
  }
}

export default randomPokemon;
