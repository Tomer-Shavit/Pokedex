import { FC, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import BackButton from "../back-button/back-button.component";
import PokemonCard from "../pokemon-card/pokemon-card.component";
import ScrollToTopButton from "../scroll-top-button/scroll-top-button.component";

import "./favorites.styles.scss";

const Favorites: FC = () => {
  const { likedPokemons } = useContext(UserContext);

  return (
    <div className="favorites">
      {likedPokemons.length ? (
        likedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))
      ) : (
        <div>No pokemons were added</div>
      )}
      <ScrollToTopButton />
      <BackButton />
    </div>
  );
};

export default Favorites;
