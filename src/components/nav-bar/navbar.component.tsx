import { ReactComponent as Logo } from "../../assets/pokeball.svg";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/Pokedex">
          <Logo className="logo" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
