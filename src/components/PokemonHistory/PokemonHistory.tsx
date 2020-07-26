import React from "react";
// Styles
import styles from "./PokemonHistory.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";

export interface IPokemonHistoryProps {
  pokemonHistory: IPokemon[];
  onClick(pokemonHistoryName: string): void;
}

function PokemonHistory({
  pokemonHistory,
  onClick,
}: IPokemonHistoryProps): React.ReactElement<IPokemonHistoryProps> {
  return (
    <div className={styles["ph-container"]}>
      <h2>Visitado recientemente</h2>
      <div className={styles["ph-list"]}>
        {pokemonHistory.map((pokemon) => (
          <div
            className={styles["ph-item"]}
            key={pokemon.id}
            onClick={() => {
              onClick(pokemon.name);
            }}
          >
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonHistory;
