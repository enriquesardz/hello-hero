import React, { useEffect } from "react";
// Styles
import styles from "./Pokedex.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";
import { mapTypeToColor, mapTypeText } from "utils";

export interface IPokedex {
  pokemon: IPokemon;
}

function Pokedex({ pokemon }: IPokedex): React.ReactElement<IPokedex> {
  const cardBorders = {
    borderLeft: `1px solid black`,
    borderTop: `1px solid black`,
    borderRight: `1px solid black`,
    borderBottom: `1px solid black`,
  };

  // useEffect(() => {
  //   pokemon.types.push("asdf");
  // }, [pokemon]);

  function mapBorderColorsStyle() {
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

  return (
    <div className={styles["pc-container"]}>
      <div className={styles["p-img"]}>
        <div>
          <img src={pokemon.image} alt={pokemon.name}></img>
        </div>
      </div>

      <div className={styles["p-container"]} style={mapBorderColorsStyle()}>
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
                      backgroundColor: mapTypeToColor(type),
                    }}
                  >
                    <span>{mapTypeText(type)}</span>
                  </div>
                  {pokemon.types.length > 1 &&
                  index !== pokemon.types.length - 1 ? (
                    <span>/</span>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={"flex-fill"}></div>
        <div className={styles["p-footer"]}>
          <h3>Acerca de {pokemon.name}</h3>
          <p>{pokemon.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
