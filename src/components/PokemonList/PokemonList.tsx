import React, { useEffect, useRef } from "react";
// Interfaces
import IPokemon from "interfaces/IPokemon";
// Styles
import styles from "./PokemonList.module.css";
import LoadingRing from "components/LoadingRing/LoadingRing";

export interface IPokemonList {
  pokemons: IPokemon[];
  isLoading: boolean;
  onClick(pokemonName: string): void;
  onLoadMore(): void;
}

function PokemonList({
  pokemons,
  isLoading,
  onClick,
  onLoadMore,
}: IPokemonList): React.ReactElement<IPokemonList> {
  const ref: any = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isLoading) return;
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, onLoadMore, isLoading]);

  return (
    <>
      <div className={styles["pl-container"]}>
        {pokemons && pokemons.length > 0
          ? pokemons.map((pokemon) => (
              <div
                key={pokemon.id}
                className={styles["pl-item"]}
                onClick={() => {
                  onClick(pokemon.name);
                }}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
              </div>
            ))
          : null}
      </div>
      <div className={styles["pl-loading-container"]}>
        {isLoading ? <LoadingRing className={styles["pl-loading"]} /> : null}
        {isLoading ? null : (
          <div className={styles["pl-observer"]} ref={ref}></div>
        )}
      </div>
    </>
  );
}

export default PokemonList;
