import initialState from "./initialState";
import { ADD_POKEMON_HISTORY } from "store/actions/actionTypes";
import { CONST_MAX_HISTORY_AMOUNT } from "utils";

export default function pokemonReducer(
  state = initialState.pokemon,
  action: any
) {
  switch (action.type) {
    case ADD_POKEMON_HISTORY:
      let _history: any[] = [...state.history];
      if (_history.length >= CONST_MAX_HISTORY_AMOUNT) {
        _history.pop();
      }
      if (_history.length > 0) {
        let index = _history.findIndex(
          (pokemon: any) => pokemon.id === action.pokemon.id
        );
        if (index > -1) {
          _history.splice(index, 1);
        }
      }
      _history.unshift(action.pokemon);
      return { ...state, history: _history };
    default:
      return state;
  }
}
