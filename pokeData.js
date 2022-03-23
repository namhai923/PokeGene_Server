import pokeApi from "./api/pokeApi.js";
import SPECIAL_SEARCH from "./SPECIAL_SEARCH_NAME.js";

async function getPokeImage(pokeName) {
  try {
    let data = await pokeApi.getPokemon(pokeName);
    let image = data["sprites"]["other"]["official-artwork"]["front_default"];
    return image;
  } catch (error) {
    throw error;
  }
}

async function getPokeDescription(pokeName) {
  try {
    if (SPECIAL_SEARCH.includes(pokeName)) {
      pokeName = pokeName.split("-")[0];
    }
    let data = await pokeApi.getPokeSpecies(pokeName);
    let description = "";
    for (let line of data["flavor_text_entries"]) {
      if (
        line["version"]["name"] === "x" &&
        line["language"]["name"] === "en"
      ) {
        description = line["flavor_text"];
      }
    }
    if (description === "") {
      description = "Not available";
    }
    return description;
  } catch (error) {
    throw error;
  }
}

export { getPokeImage, getPokeDescription };
