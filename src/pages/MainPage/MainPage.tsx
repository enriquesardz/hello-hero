import React from "react";
// Components
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import PokemonListPage from "pages/PokemonListPage/PokemonListPage";
import PokemonDetailPage from "pages/PokemonDetailPage/PokemonDetailPage";
import NotFound from "pages/NotFound/NotFound";
// Router
import { Switch, Route, Redirect } from "react-router-dom";

export interface IMainPageProps {}

function MainPage(): React.ReactElement<IMainPageProps> {
  return (
    <>
      <Navbar />
      <div className={"flex-fill flex-container"}>
        <Switch>
          <Route path="/" exact component={PokemonListPage} />
          <Route path="/pokemon/:pokemonName" component={PokemonDetailPage} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
