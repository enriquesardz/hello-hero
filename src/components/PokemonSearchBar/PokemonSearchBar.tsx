import React, { useState } from "react";
// Router
import { useHistory } from "react-router-dom";
// Styles
import styles from "./PokemonSearchBar.module.css";

export interface IPokemonSearchBarProps {
  onExpand(isExpanding: boolean): void;
}

function PokemonSearchBar({
  onExpand,
}: IPokemonSearchBarProps): React.ReactElement<IPokemonSearchBarProps> {
  const history = useHistory();
  const [pokemonName, setPokemonName] = useState("");
  const [searchShowing, setSearchShowing] = useState(false);

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
      <form onSubmit={handleOnSearchPokemon}>
        <div
          className={styles["psb-search"]}
          onMouseOver={() => {
            setSearchShowing(true);
            onExpand(true);
          }}
          onMouseLeave={() => {
            setSearchShowing(false);
            onExpand(false);
          }}
        >
          {searchShowing || pokemonName ? (
            <input
              type="text"
              value={pokemonName}
              onChange={handleOnPokemonNameChange}
            />
          ) : (
            <p>Buscar</p>
          )}
          <button className={styles["psb-search-btn"]}>
            <div></div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default PokemonSearchBar;
