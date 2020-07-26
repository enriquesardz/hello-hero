import React, { useState, useEffect } from "react";
// Api
import { getPokemonByName } from "api";
// Components
import Pokedex from "components/Pokedex/Pokedex";
import LoadingState from "components/LoadingState/LoadingState";
import EmptyStateNoPokemon from "components/EmptyStateNoPokemon/EmptyStateNoPokemon";
// Router
import { useParams } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { handleAddPokemonToHistory } from "store/actions/pokemonActions";
// Styles
import styles from "./PokemonDetailPage.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";

export interface IPokemonDetailPageProps {
  handleAddPokemonToHistory(pokemon: IPokemon): void;
}

function PokemonDetailPage({
  handleAddPokemonToHistory: onAddPokemonToHistory,
}: IPokemonDetailPageProps): React.ReactElement<IPokemonDetailPageProps> {
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
        onAddPokemonToHistory(_pokemon);
        setNotFound(false);
      } catch (error) {
        console.log(error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }

  return (
    <div className={styles["mp-container"]}>
      {pokemon && !notFound ? (
        <Pokedex pokemon={pokemon} key={pokemon.id} />
      ) : null}
      {notFound ? <EmptyStateNoPokemon /> : null}
      <LoadingState isLoading={isLoading} />
    </div>
  );
}

function mapStateToProps({ pokemon }: any) {
  return {
    pokemonHistory: pokemon.history,
  };
}

const mapDispatchToProps = {
  handleAddPokemonToHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailPage);
