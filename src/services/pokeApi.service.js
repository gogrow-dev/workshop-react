import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;
const pokemonUrl = baseUrl + "pokemon/";

export const getPokemons = async () => {
  try {
    const response = await axios.get(pokemonUrl + "?limit=20&offset=7");
    const { data } = response;
    const finalResult = await decoratePokemonsArray(data);
    return finalResult;
  } catch (error) {
    // TODO: Handle errors here.
  }
};

export const getPokemonById = async (id) => {
  try {
    const { data } = await axios.get(pokemonUrl + id);
    return data;
  } catch (error) {
    // TODO: Handle errors here.
  }
};

const decoratePokemonsArray = async (data) => {
  let finalResult = [];
  for (const pokemon of data.results) {
    const pokemonUrl = pokemon.url;
    const { data } = await axios.get(pokemonUrl);
    finalResult.push(data);
  }
  return finalResult;
};
