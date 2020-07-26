import React from "react";
// Components
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import PokemonListPage from "pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "pages/PokemonDetailPage/PokemonDetailPage";
// Router
import { Switch, Route } from "react-router-dom";

export interface IMainPageProps {}

function MainPage({}: IMainPageProps): React.ReactElement<IMainPageProps> {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        <Route path="/pokemon/:pokemonName" component={PokemonDetailPage} />
      </Switch>
      <div style={{ height: "100%" }}></div>
      <Footer />
    </>
  );
}

export default MainPage;
