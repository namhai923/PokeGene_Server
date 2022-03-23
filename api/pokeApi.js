import axiosClient from "./axiosClient.js";

let pokeApi = {
  getType: (type) => {
    let url = `/type/${type}`;
    return axiosClient.get(url);
  },
  getPokemon: (name) => {
    let url = `/pokemon/${name}`;
    return axiosClient.get(url);
  },
  getPokeSpecies: (name) => {
    let url = `/pokemon-species/${name}`;
    return axiosClient.get(url);
  },
};

export default pokeApi;
