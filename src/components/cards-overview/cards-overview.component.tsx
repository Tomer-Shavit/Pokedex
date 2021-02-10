import React, { useEffect, useState, useContext } from "react";

import { Waypoint } from "react-waypoint";
import { debounce } from "lodash";

import Spinner from "../spinner/spinner.component";
import PokemonCard from "../pokemon-card/pokemon-card.component";
import fetchPokemons from "../../utils/fetchPokemons";
import { UserContext } from "../../context/UserContext";
import { useCallback } from "react";
import fetchPokemon from "../../utils/fetchPokemon";
import { Pokemon } from "../../types";
import LikedPokemonsButton from "../liked-pokemons-button/liked-pokemons-button.component";
import ScrollToTopButton from "../scroll-top-button/scroll-top-button.component";
import { checkIfExists } from "../../utils/checkIfExists";

import "./cards-overview.styles.scss";
import ditto from "../../assets/ditto.png";
import MissingPokemons from "../missing-pokemons/missing-pokemons.component";

interface Props {
  search: string | null;
}

const CardsOverview: React.FC<Props> = ({ search }) => {
  const {
    fetchedPokemons,
    addFetchedPokemons,
    counter,
    setCounter,
  } = useContext(UserContext);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | string>("");
  const [pokemonSearch, setPokemonSearch] = useState<string | null>(null);
  const pokemonApi = `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${counter}`;

  let body = null;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedText = useCallback(
    debounce((_searchVal: string | null) => {
      setPokemonSearch(_searchVal);
    }, 1500),
    []
  );

  useEffect(() => debouncedText(search), [debouncedText, search]);

  // fetch the searched pokemon when user types a name
  useEffect(() => {
    if (pokemonSearch) {
      const isPokemon = checkIfExists(fetchedPokemons, pokemonSearch);
      if (isPokemon) {
        setSelectedPokemon(isPokemon);
      } else {
        fetchPokemon(
          `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`
        ).then((res) => setSelectedPokemon(res));
      }
    }
  }, [pokemonSearch, fetchedPokemons]);

  // Fetches Pokemons and add them to the context pokemon array
  useEffect(() => {
    fetchPokemons(pokemonApi).then((pokemonsArr) => {
      if (
        !fetchedPokemons.length ||
        !fetchedPokemons.some((pokemon) => pokemon.id === pokemonsArr[0].id)
      ) {
        addFetchedPokemons(pokemonsArr);
      }
    });
  }, [pokemonApi, fetchedPokemons, addFetchedPokemons]);

  // render the right component
  if (fetchedPokemons.length && !pokemonSearch) {
    body = fetchedPokemons.map((pokemon, i) => (
      <div className="card-container" key={pokemon.id}>
        <PokemonCard pokemon={pokemon}></PokemonCard>
        {i === fetchedPokemons.length - 12 && (
          <Waypoint onEnter={() => setCounter(counter + 50)}></Waypoint>
        )}
      </div>
    ));
  } else if (selectedPokemon) {
    if (typeof selectedPokemon === "string") {
      body = (
        <MissingPokemons
          img={ditto}
          text={`No pokemons with the name "${pokemonSearch}" were found, try again`}
        ></MissingPokemons>
      );
    } else {
      body = <PokemonCard pokemon={selectedPokemon}></PokemonCard>;
    }
  } else {
    body = <Spinner />;
  }

  return (
    <div className="cards-overview">
      {body}
      <ScrollToTopButton />
      <LikedPokemonsButton />
    </div>
  );
};

export default CardsOverview;
