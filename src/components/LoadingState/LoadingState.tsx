import React from "react";
import styles from "./LoadingState.module.css";

function LoadingState({ isLoading = true }) {
  return isLoading ? (
    <div className={styles["ls-container"]}>
      <div className={styles["center-on-page"]}>
        <div className={styles["pokeball"]}>
          <div className={styles["pokeball__button"]}></div>
        </div>
      </div>
    </div>
  ) : null;
}

export default LoadingState;
