import React, { useState, useEffect } from "react";
// Api
import { getPokemonByName } from "api";
// Components
import Pokedex from "components/Pokedex/Pokedex";
import LoadingState from "components/LoadingState/LoadingState";
import EmptyStateNoPokemon from "components/EmptyStateNoPokemon/EmptyStateNoPokemon";
import PokemonHistory from "components/PokemonHistory/PokemonHistory";
import PokemonStats from "components/PokemonStats/PokemonStats";
// Router
import { useParams, useHistory } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { handleAddPokemonToHistory } from "store/actions/pokemonActions";
// Styles
import styles from "./PokemonDetailPage.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";
// Utils
import { mapTypeToColor } from "utils";

export interface IPokemonDetailPageProps {
  pokemonHistory: IPokemon[];
  handleAddPokemonToHistory(pokemon: IPokemon): void;
}

function PokemonDetailPage({
  pokemonHistory,
  handleAddPokemonToHistory: onAddPokemonToHistory,
}: IPokemonDetailPageProps): React.ReactElement<IPokemonDetailPageProps> {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { pokemonName } = useParams();
  const history = useHistory();

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
        console.error(error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  }

  function mapBorderColorsStyle() {
    if (!pokemon) return;
    if (pokemon.types.length > 1) {
      return {
        borderLeft: `4px solid ${mapTypeToColor(pokemon.types[0])}`,
        borderTop: `2px solid ${mapTypeToColor(pokemon.types[0])}`,
        borderRight: `2px solid ${mapTypeToColor(pokemon.types[1])}`,
        borderBottom: `4px solid ${mapTypeToColor(pokemon.types[1])}`,
      };
    } else {
      return {
        borderLeft: `4px solid ${mapTypeToColor(pokemon.types[0])}`,
        borderTop: `2px solid ${mapTypeToColor(pokemon.types[0])}`,
        borderRight: `2px solid ${mapTypeToColor(pokemon.types[0])}`,
        borderBottom: `4px solid ${mapTypeToColor(pokemon.types[0])}`,
      };
    }
  }

  function handlePokemonClick(historyPokemonName: string) {
    history.push(`/pokemon/${historyPokemonName}`);
  }

  return (
    <div className={styles["mp-container"]}>
      {!isLoading ? (
        <>
          {pokemon && !notFound ? (
            <>
              <Pokedex pokemon={pokemon} key={pokemon.id} />
              <PokemonStats
                stats={pokemon && pokemon.stats}
                borderColors={mapBorderColorsStyle()}
              />
            </>
          ) : null}
          {notFound ? <EmptyStateNoPokemon /> : null}
          <PokemonHistory
            pokemonHistory={pokemonHistory}
            onClick={handlePokemonClick}
          />
        </>
      ) : null}

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
