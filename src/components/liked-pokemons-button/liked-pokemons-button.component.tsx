import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./liked-pokemons-button.styles.scss";
import { useHistory } from "react-router-dom";

const LikedPokemonsButton: React.FC = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/favorites");
  };
  return (
    <button className="liked-pokemons-button" onClick={handleClick}>
      <FavoriteBorderIcon className="favorite"></FavoriteBorderIcon>
    </button>
  );
};
export default LikedPokemonsButton;
