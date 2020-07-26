import React, { useEffect, useState } from "react";
// Api
import { getPokemonByPage } from "api";
// Router
import { useHistory } from "react-router-dom";
// Components
import PokemonList from "components/PokemonList/PokemonList";
// Interfaces
import IPokemon from "interfaces/IPokemon";

export interface IPokemonListPage {}

function PokemonListPage({}): React.ReactElement<IPokemonListPage> {
  const history = useHistory();
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons(offset: number = 0) {
    try {
      setIsLoading(true);
      let _pokemons = await getPokemonByPage(offset);
      setPokemons([...pokemons, ..._pokemons]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  function handlePokemonClick(pokemonName: string) {
    history.push(`/pokemon/${pokemonName}`);
  }

  function handleOnLoadMore() {
    if (isLoading) return;
    getPokemons(pokemons.length);
  }

  return (
    <div>
      <PokemonList
        pokemons={pokemons}
        isLoading={isLoading}
        onClick={handlePokemonClick}
        onLoadMore={handleOnLoadMore}
      />
    </div>
  );
}

export default PokemonListPage;
