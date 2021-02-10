import { createContext, FC, useState } from "react";
import { Pokemon } from "../types";

interface UserContextInterface {
  counter: number;
  setCounter: (counter: number) => void;
  likedPokemons: Pokemon[];
  fetchedPokemons: Pokemon[];
  addFetchedPokemons: (fetchedPokemons: Pokemon[]) => void;
  addPokemon: (pokemon: Pokemon) => void;
  removePokemon: (pokemon: Pokemon) => void;
}

const contextDefaultValues: UserContextInterface = {
  counter: 0,
  setCounter: () => {},
  likedPokemons: [],
  fetchedPokemons: [],
  addFetchedPokemons: () => {},
  addPokemon: () => {},
  removePokemon: () => {},
};

export const UserContext = createContext<UserContextInterface>(
  contextDefaultValues
);

export const UserProvider: FC = ({ children }) => {
  const [likedPokemons, setLikedPokemons] = useState<Pokemon[]>([]);
  const [fetchedPokemons, setFetchedPokemons] = useState<Pokemon[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const addPokemon = (pokemon: Pokemon) => {
    setLikedPokemons((prev): Pokemon[] => [...prev, pokemon]);
  };

  const removePokemon = (removePokemon: Pokemon) => {
    const newArr = likedPokemons.filter(
      (likedPokemon: Pokemon) => likedPokemon.id !== removePokemon.id
    );
    setLikedPokemons(newArr);
  };

  const addFetchedPokemons = (pokemons: Pokemon[]) => {
    setFetchedPokemons((prev): Pokemon[] => [...prev, ...pokemons]);
  };

  return (
    <UserContext.Provider
      value={{
        counter,
        setCounter,
        likedPokemons,
        fetchedPokemons,
        addFetchedPokemons,
        addPokemon,
        removePokemon,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
