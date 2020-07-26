import React from "react";
// Components
import PokemonListPage from "pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "pages/PokemonDetailPage/PokemonDetailPage";
import PokemonSearchBar from "components/PokemonSearchBar/PokemonSearchBar";
// Router
import { Switch, Route, Link } from "react-router-dom";

export interface IMainPageProps {}

function MainPage({}: IMainPageProps): React.ReactElement<IMainPageProps> {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/pokemon/test">List</Link>
      </div>
      <PokemonSearchBar />
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        <Route path="/pokemon/:pokemonName" component={PokemonDetailPage} />
      </Switch>
    </>
  );
}

export default MainPage;
