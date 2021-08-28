import React, { ReactNode } from "react";
import challenges from "../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
}

export const ChallengesContext = React.createContext(
  {} as ChallengesContextData
);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = React.useState(1);
  const [currentExperience, setCurrentExperience] = React.useState(0);
  const [challengesCompleted, setChallengesCompleted] = React.useState(0);
  const [activeChallenge, setActiveChallenge] = React.useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function startNewChallenge() {
    console.log("Passei por aqui");
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
		experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
