import React, { useState } from "react";
// Router
import { useHistory } from "react-router-dom";
// Styles
import styles from "./PokemonSearchBar.module.css";

export interface IPokemonSearchBarProps {}

function PokemonSearchBar({}: IPokemonSearchBarProps): React.ReactElement<
  IPokemonSearchBarProps
> {
  const history = useHistory();
  const [pokemonName, setPokemonName] = useState("");

  function handleOnSearchPokemon(event: any) {
    event.preventDefault();
    if (!pokemonName) return;
    history.push(`/pokemon/${pokemonName.toLowerCase()}`);
    setPokemonName("");
  }

  async function handleOnPokemonNameChange(event: any) {
    setPokemonName(event.target.value);
  }
  return (
    <div className={styles["psb-search-container"]}>
      <form
        className={styles["psb-search-form"]}
        onSubmit={handleOnSearchPokemon}
      >
        <input
          type="text"
          value={pokemonName}
          onChange={handleOnPokemonNameChange}
        />
        <button className={styles["psb-search-btn"]}>
          <div></div>
        </button>
      </form>
    </div>
  );
}

export default PokemonSearchBar;
