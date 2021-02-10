import axios from "axios";
import { useState, useEffect } from "react";
import { Pokemon } from "../types";

export const useFetch = (api: string) => {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios({
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

      Promise.all(promises).then((data: any) => {
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
        setData((oldPokemons): Pokemon[] => [...oldPokemons, ...pokemons]);
      });
    });
  }, [api]);

  console.log("called");
  console.log({ data });
  return data;
};
