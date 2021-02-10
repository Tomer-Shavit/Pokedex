import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./back-button.styles.scss";

const BackButton: FC = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/Pokedex");
  };
  return (
    <button className="back-button" onClick={handleClick}>
      <SearchOutlinedIcon className="search"></SearchOutlinedIcon>
    </button>
  );
};

export default BackButton;
