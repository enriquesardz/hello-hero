import React, { useState, useEffect } from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import styles from "./Navbar.module.css";
import PokemonSearchBar from "components/PokemonSearchBar/PokemonSearchBar";
// Hooks
import { useWindowDimensions } from "hooks/index";

export interface INavbarProps {}

function Navbar(): React.ReactElement<INavbarProps> {
  const [isSearchExpanding, setIsSearchExpanding] = useState(false);
  const { width } = useWindowDimensions();
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
      {isSearchExpanding && width < 500 ? null : (
        <Link className={"nostyle"} to="/">
          <h1>POKEMON</h1>
        </Link>
      )}
      <div className={"flex-fill"}></div>
      <PokemonSearchBar
        onExpand={(isExpanding) => {
          setIsSearchExpanding(isExpanding);
        }}
      />
    </nav>
  );
}

export default Navbar;
