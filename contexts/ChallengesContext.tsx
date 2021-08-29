import React, { ReactNode } from "react";
import challenges from "../challenges.json";
import Cookies from "js-cookie";

interface ChallengesProviderProps {
	children: ReactNode;
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  startNewChallenge: () => void;
  completeChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = React.createContext(
  {} as ChallengesContextData
);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = React.useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = React.useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = React.useState(rest.challengesCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = React.useState(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  React.useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted]);

  React.useEffect(() => {
    Notification.requestPermission();
  }, []);

  function startNewChallenge() {
    console.log("Passei por aqui");
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

	new Audio('/notification.mp3').play();
    if (Notification.permission === 'granted') {
      new Notification('NOVO DESAFIO! 🎉', {
        body: `Valendo ${challenge.amount} de xp`,
        silent: false,
      });
    }
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }
    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }
    setChallengesCompleted(challengesCompleted + 1);
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
  }

  function resetChallenge() {
    setActiveChallenge(null);
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
        completeChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
