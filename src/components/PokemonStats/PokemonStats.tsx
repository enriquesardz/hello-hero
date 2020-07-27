import React from "react";
// Styles
import styles from "./PokemonStats.module.css";
// Utils
import { mapStatTypeToText } from "utils";

export interface IPokemonStatsProps {
  stats: {
    id: number;
    type: string;
    base: number;
    effort: number;
  }[];
  borderColors: any;
}

function PokemonStats({
  stats,
  borderColors,
}: IPokemonStatsProps): React.ReactElement<IPokemonStatsProps> {
  return (
    <div className={styles["ps-container"]} style={borderColors}>
      {stats &&
        stats.map((stat) => (
          <div className={styles["ps-item"]} key={stat.id}>
            <h3>{mapStatTypeToText(stat.type)}</h3>
            <p>
              <b>Base</b>: {stat.base}
            </p>
            <p>
              <b>Esfuerzo</b>: {stat.effort}
            </p>
          </div>
        ))}
    </div>
  );
}

export default PokemonStats;
