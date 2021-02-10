import axios from "axios";
import { Pokemon } from "../types";

const fetchPokemons = (api: string): Promise<Pokemon[]> => {
  return axios({
    url: api,
    method: "GET",
  }).then((res) => {
    const promises: any = [];
    res.data.results.forEach((pokemon: any) => {
      promises.push(
        axios({
          url: pokemon.url,
          method: "GET",
        })
      );
    });
    return Promise.all(promises).then((data: any) => {
      const pokemons: Pokemon[] = data.map((poke: any) => {
        return {
          liked: false,
          id: poke.data.id,
          name: poke.data.name,
          image: poke.data.sprites.front_default,
          weight: poke.data.weight,
          type: poke.data.types.map((type: any) => type.type.name),
        };
      });
      return pokemons;
    });
  });
};

export default fetchPokemons;
