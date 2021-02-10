import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useContext } from "react";
import "./pokemon-card.styles.scss";
import { UserContext } from "../../context/UserContext";
import { Pokemon } from "../../types";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const { addPokemon, removePokemon } = useContext(UserContext);

  const handleLike = () => {
    if (!pokemon.liked) {
      addPokemon(pokemon);
      pokemon.liked = true;
    } else {
      removePokemon(pokemon);
      pokemon.liked = false;
    }
  };

  return (
    <div className="pokemon-card" onClick={handleLike}>
      <div className="main-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="bottom-card-container">
        <h2 className="name">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>
        <span>
          Type:{" "}
          {pokemon.type?.map(
            (type) => `${type.charAt(0).toUpperCase() + type.slice(1)} `
          )}
        </span>
        <span>Weight: {pokemon.weight}</span>
        <div className="heart-container">
          {pokemon.liked ? (
            <FavoriteIcon className="heart-icon" />
          ) : (
            <FavoriteBorderIcon className="heart-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
