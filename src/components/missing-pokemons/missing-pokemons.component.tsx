import { FC } from "react";
import "./missing-pokemons.styles.scss";

interface Props {
  img: string;
  text: string;
}

const MissingPokemons: FC<Props> = ({ img, text }) => (
  <div className="missing-pokemons">
    <div className="img-container">
      <img src={img} alt="Missing Pokemons"></img>
    </div>
    <span className="missing-text">{text}</span>
  </div>
);

export default MissingPokemons;
