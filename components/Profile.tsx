import styles from "../styles/components/Profile.module.css";
import { ChallengesContext } from "../contexts/ChallengesContext";
import React from "react";

export function Profile() {
  const { level } = React.useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/italoholanda.png" alt="Ítalo Holanda" />
      <div>
        <strong>Ítao Holanda</strong>
        <p>
          <img src="icons/level.svg" alt="Seu level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
