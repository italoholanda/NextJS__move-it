import React, { ReactNode } from "react";
import challenges from '../challenges.json';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = React.createContext(
  {} as ChallengesContextData
);

function startNewChallenge() {
	console.log("Passei por aqui");
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
	const [level, setLevel] = React.useState(1);
	const [currentExperience, setCurrentExperience] = React.useState(0);
	const [challengesCompleted, setChallengesCompleted] = React.useState(0);

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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
