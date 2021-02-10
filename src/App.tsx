import "./App.css";
import NavBar from "./components/nav-bar/navbar.component";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Favorites from "./components/favorites/favorites.component";
import Homepage from "./components/homepage/homepage.component";
// import Favorites from "./components/favorites/favorites.component";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/favorites" exact component={Favorites}></Route>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
