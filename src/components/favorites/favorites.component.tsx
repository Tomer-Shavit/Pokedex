import { FC, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import BackButton from "../back-button/back-button.component";
import MissingPokemons from "../missing-pokemons/missing-pokemons.component";
import PokemonCard from "../pokemon-card/pokemon-card.component";
import ScrollToTopButton from "../scroll-top-button/scroll-top-button.component";
import masterball from "../../assets/master-ball.png";

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
        <MissingPokemons
          img={masterball}
          text="No liked pokemons were found."
        ></MissingPokemons>
      )}
      <ScrollToTopButton />
      <BackButton />
    </div>
  );
};

export default Favorites;
