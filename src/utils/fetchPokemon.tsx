import axios from "axios";
import { Pokemon } from "../types";

const fetchPokemon = (api: string): Promise<Pokemon | string> => {
  return axios
    .get(api)
    .then((res) => res.data)
    .then((data) => {
      let pokemon: Pokemon = {
        liked: false,
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        weight: data.weight,
        type: data.types.map((type: any) => type.type.name),
      };
      return pokemon;
    })
    .catch(() => {
      return "No pokemons were found with that name";
    });
};

export default fetchPokemon;
