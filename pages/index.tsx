import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import styles from "../styles/pages/Home.module.css";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MOVE IT! | Workout Game</title>
      </Head>
      <ExperienceBar />
      <section>
        <div className={styles.cycleContainer}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>
    </div>
  );
}
