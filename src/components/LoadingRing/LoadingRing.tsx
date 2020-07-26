import React from "react";
// Styles
import styles from "./LoadingRing.module.css";

export interface ILoadingRingProps {
  className?: string;
}

function LoadingRing({
  className: pClassName,
}: ILoadingRingProps): React.ReactElement<ILoadingRingProps> {
  return (
    <div className={`${styles["lds-ring"]} ${pClassName || ""}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default LoadingRing;
