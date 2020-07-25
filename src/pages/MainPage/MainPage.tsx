import React, { useState } from "react";
// Api
import { getPokemonByName } from "api";
// Components
import Pokedex from "components/Pokedex/Pokedex";
import LoadingState from "components/LoadingState/LoadingState";
// Styles
import styles from "./MainPage.module.css";
// Interfaces
import IPokemon from "../../interfaces/IPokemon";

export interface IMainPage {}

function MainPage(): React.ReactElement<IMainPage> {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [pokemonName, setPokemonName] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function getPokemon(pokemonName: string) {
    let _pokemon = await getPokemonByName(pokemonName);
    setPokemon(_pokemon);
  }

  async function handleOnSearchPokemon(event: any) {
    event.preventDefault();
    if (!pokemonName) return;
    setIsLoading(true);
    setTimeout(async () => {
      try {
        await getPokemon(pokemonName.toLowerCase());
        setPokemonName("");
        setNotFound(false);
      } catch (error) {
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }

  async function handleOnPokemonNameChange(event: any) {
    setPokemonName(event.target.value);
  }

  return (
    <div className={styles["mp-container"]}>
      <div className={styles["mp-search-container"]}>
        <form
          className={styles["mp-search-form"]}
          onSubmit={handleOnSearchPokemon}
        >
          <input
            type="text"
            value={pokemonName}
            onChange={handleOnPokemonNameChange}
          />
          <button className={styles["mp-search-btn"]}>
            <div></div>
          </button>
        </form>
      </div>
      {pokemon && !notFound ? <Pokedex pokemon={pokemon} /> : null}
      {notFound ? <div>Not found</div> : null}
      <LoadingState isLoading={isLoading} />
    </div>
  );
}

export default MainPage;
