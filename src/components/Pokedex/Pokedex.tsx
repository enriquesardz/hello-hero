import React, { useState } from "react";
// Styles
import styles from "./Pokedex.module.css";
// Interfaces
import IPokemon from "interfaces/IPokemon";
import { mapTypeToColor, mapTypeText } from "utils";

export interface IPokedex {
  pokemon: IPokemon;
}

function Pokedex({ pokemon }: IPokedex): React.ReactElement<IPokedex> {
  const [showShiny, setShowShiny] = useState(false);
  const [currentGender, setCurrentGender] = useState("m");

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

  function mapPokemonImage() {
    if (currentGender === "m") {
      return showShiny ? pokemon.imageShiny : pokemon.image;
    }
    if (currentGender === "f") {
      return showShiny ? pokemon.imageFemaleShiny : pokemon.imageFemale;
    }
  }

  return (
    <div className={styles["pc-container"]}>
      <div className={styles["p-img"]}>
        <div>
          {!showShiny ? (
            <img
              src={mapPokemonImage()}
              alt={pokemon.name}
              onMouseEnter={() => {
                setShowShiny(true);
              }}
            ></img>
          ) : (
            <img
              src={mapPokemonImage()}
              alt={pokemon.name}
              onMouseLeave={() => {
                setShowShiny(false);
              }}
            ></img>
          )}
        </div>
      </div>

      <div className={styles["p-container"]} style={mapBorderColorsStyle()}>
        <div className={styles["p-header"]}>
          <div className={styles["p-title"]}>
            <div className={styles["p-theader"]}>
              <h2>{pokemon.name}</h2>
              <div className={styles["p-gender"]}>
                {pokemon.image ? (
                  <img
                    className={`${styles["p-gender-m"]} ${
                      currentGender === "m" ? "" : styles["p-disabled"]
                    }`}
                    src={require("assets/icons/male.svg")}
                    onClick={() => {
                      setCurrentGender("m");
                    }}
                    alt="Male"
                  />
                ) : null}
                {pokemon.imageFemale ? (
                  <img
                    className={`${styles["p-gender-f"]} ${
                      currentGender === "f" ? "" : styles["p-disabled"]
                    }`}
                    src={require("assets/icons/female.svg")}
                    onClick={() => {
                      setCurrentGender("f");
                    }}
                    alt="Female"
                  />
                ) : null}
              </div>
              <div className={"flex-fill"} />
              <div className={styles["p-num-badge"]}>
                <img
                  src={require("assets/icons/pokeball.svg")}
                  alt="pokeball"
                />
                <span>{pokemon.id}</span>
              </div>
            </div>
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
