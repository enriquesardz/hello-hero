import React from "react";
import styles from "./EmptyStateNoPokemon.module.css";
import pokeballGray from "assets/empty-states/pokeball-gray.png";

export interface IEmptyStateNoPokemon {
  children?: any;
}

function EmptyStateNoPokemon({ children: pChildren }: IEmptyStateNoPokemon) {
  return (
    <div className={styles["es-container"]}>
      <img className={styles["es-icn"]} src={pokeballGray} alt="No pokemon" />
      <div className={styles["es-header"]}>
        <h2>Lo sentimos...</h2>
        {pChildren ? (
          pChildren
        ) : (
          <p>Ese Pokemon se encuentra en otra region.</p>
        )}
      </div>
    </div>
  );
}

export default EmptyStateNoPokemon;
