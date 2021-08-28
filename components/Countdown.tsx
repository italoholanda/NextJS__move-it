import cx from "classnames";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  return (
    <>
      <div className={styles.countdown}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <button disabled className={styles.startCycleButton}>
        Ciclo encerrado
      </button>

      <>
        <button
        type="button"
        className={cx(styles.startCycleButton,
        styles.startCycleButtonActive)}>
          Abandonar ciclo
        </button>

        <button type="button" className={styles.startCycleButton}>
          Iniciar um ciclo
        </button>
      </>

    </>
  );
}
