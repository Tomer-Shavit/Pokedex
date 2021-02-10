import React, { FC, useState } from "react";
import CardsOverview from "../cards-overview/cards-overview.component";
import InputBox from "../input-box/input-box.component";
import "./homepage.styles.scss";

const Homepage: FC = () => {
  const [pokemonSearch, setPokemonSearch] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonSearch(e.target.value);
  };

  return (
    <div className="homepage">
      <InputBox handleChange={handleChange} placeholder="Search"></InputBox>
      <CardsOverview search={pokemonSearch}></CardsOverview>
    </div>
  );
};

export default Homepage;
