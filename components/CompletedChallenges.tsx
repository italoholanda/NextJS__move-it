import styles from "../styles/components/CompletedChallenges.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";
import React from "react";

export function CompletedChallenges() {
  const { challengesCompleted } = React.useContext(ChallengesContext);
  return (
    <div className={styles.completedChallenges}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
