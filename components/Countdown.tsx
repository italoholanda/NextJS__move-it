import cx from "classnames";
import React from "react";
import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../contexts/CountdownContext";

export function Countdown() {
  const {
    seconds,
    minutes,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = React.useContext(CountdownContext);

  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");

  return (
    <>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled className={styles.startCycleButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={cx(
                styles.startCycleButton,
                styles.startCycleButtonActive
              )}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.startCycleButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </>
  );
}
