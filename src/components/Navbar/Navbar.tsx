import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import styles from "./Navbar.module.css";
import PokemonSearchBar from "components/PokemonSearchBar/PokemonSearchBar";

export interface INavbarProps {}

function Navbar(): React.ReactElement<INavbarProps> {
  return (
    <nav className={styles["navbar"]}>
      <Link to="/">
        <img
          className={styles["nb-icn"]}
          src={require("assets/icons/pokeball.svg")}
          alt="home"
        />
      </Link>
      <div className={"flex-fill"}></div>
      <h1>POKEMON</h1>
      <div className={"flex-fill"}></div>
      <PokemonSearchBar /> 
    </nav>
  );
}

export default Navbar;
