import React, { useState, useEffect } from "react";
// Api
import { getPokemonByName } from "api";
// Components
import Pokedex from "components/Pokedex/Pokedex";
import LoadingState from "components/LoadingState/LoadingState";
import EmptyStateNoPokemon from "components/EmptyStateNoPokemon/EmptyStateNoPokemon";
// Router
import { useParams } from "react-router-dom";
// Styles
import styles from "./PokemonDetailPage.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";

export interface IPokemonDetailPageProps {}

function PokemonDetailPage(): React.ReactElement<IPokemonDetailPageProps> {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { pokemonName } = useParams();

  useEffect(() => {
    getPokemon(pokemonName);
  }, [pokemonName]);

  async function getPokemon(pokemonName: string) {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        let _pokemon = await getPokemonByName(pokemonName);
        setPokemon(_pokemon);
        setNotFound(false);
      } catch (error) {
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }

  return (
    <div className={styles["mp-container"]}>
      {pokemon && !notFound ? <Pokedex pokemon={pokemon} /> : null}
      {notFound ? <EmptyStateNoPokemon /> : null}
      <LoadingState isLoading={isLoading} />
    </div>
  );
}

export default PokemonDetailPage;
