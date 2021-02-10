import { Pokemon } from "../types";

export const checkIfExists = (pokemons: Pokemon[], search: string) => {
  const pokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === search.toLowerCase()
  );
  if (pokemon) {
    return pokemon;
  } else {
    return null;
  }
};
