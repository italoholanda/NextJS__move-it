import cx from "classnames";
import React from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = React.useState(25 * 60);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

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

      <button disabled className={styles.startCycleButton}>
        Ciclo encerrado
      </button>

      <>
        <button
          type="button"
          className={cx(styles.startCycleButton, styles.startCycleButtonActive)}
        >
          Abandonar ciclo
        </button>

        <button type="button" className={styles.startCycleButton} onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      </>
    </>
  );
}
