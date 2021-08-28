import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/italoholanda.png" alt="Ítalo Holanda" />
      <div>
        <strong>Ítao Holanda</strong>
        <p>
          <img src="icons/level.svg" alt="Seu level" />
          Level 15
        </p>
      </div>
    </div>
  );
}
