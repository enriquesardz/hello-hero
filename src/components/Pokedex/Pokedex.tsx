import React from "react";
// Styles
import styles from "./Pokedex.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";
import { CONST_TYPES_COLORS } from "utils";

export interface IPokedex {
  pokemon: IPokemon;
}

function Pokedex({ pokemon }: IPokedex): React.ReactElement<IPokedex> {
  return (
    <div className={styles["pc-container"]}>
      <div className={styles["p-img"]}>
        <div>
          <img src={pokemon.image} alt={pokemon.name}></img>
          {/* <div className={styles["p-img-shadow"]}></div> */}
        </div>
      </div>

      <div className={styles["p-container"]}>
        <div className={styles["p-header"]}>
          <div className={styles["p-title"]}>
            <h2>{pokemon.name}</h2>
            <div className={styles["p-types-list"]}>
              {pokemon.types.map((type, index) => (
                <>
                  <div
                    className={styles["p-type"]}
                    key={type}
                    style={{
                      backgroundColor: CONST_TYPES_COLORS[type]
                        ? CONST_TYPES_COLORS[type]
                        : "",
                    }}
                  >
                    <span>{type}</span>
                  </div>
                  {pokemon.types.length > 1 && index === 0 ? (
                    <span>/</span>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={"flex-fill"}></div>
        <div className={styles["p-footer"]}>
          <h3>Description</h3>
          <p>{pokemon.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
