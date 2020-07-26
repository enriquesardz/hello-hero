import React from "react";
import EmptyStateNoPokemon from "components/EmptyStateNoPokemon/EmptyStateNoPokemon";
// Styles
import styles from "./NotFound.module.css";
// Router
import { Link } from "react-router-dom";

function NotFound(): React.ReactElement {
  return (
    <div className={styles["nf-container"]}>
      <EmptyStateNoPokemon>
        <p>No ha sido posible encontrar esa ruta.</p>
        <Link to="/">
          <h2>REGRESAR</h2>
        </Link>
      </EmptyStateNoPokemon>
    </div>
  );
}

export default NotFound;
