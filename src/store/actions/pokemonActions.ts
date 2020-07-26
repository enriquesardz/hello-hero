import { ADD_POKEMON_HISTORY } from "./actionTypes";
// Interfaces
import IPokemon from "interfaces/IPokemon";

// Actions
export function addPokemonToHistory(pokemon: IPokemon) {
  return {
    type: ADD_POKEMON_HISTORY,
    pokemon,
  };
}
// Thunks
export function handleAddPokemonToHistory(pokemon: IPokemon) {
  return (dispatch: any) => {
    dispatch(addPokemonToHistory(pokemon));
  };
}
