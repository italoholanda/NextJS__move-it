import React from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownProviderProps {
  children: React.ReactNode;
}

interface CountdownContextData {
  isActive: boolean;
  hasFinished: boolean;
  minutes: number;
  seconds: number;
  resetCountdown: () => void;
  startCountdown: () => void;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = React.createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
	const [time, setTime] = React.useState(25 * 60);
	const [isActive, setIsActive] = React.useState(false);
	const [hasFinished, setHasFinished] = React.useState(false);
	const {startNewChallenge} = React.useContext(ChallengesContext);

	React.useEffect(() => {
	  window.onbeforeunload = () => {
		if (isActive) {
		  return 'Você perderá o progresso do countdown até aqui, tem certeza?'
		}
	  };
	}, [isActive])

	React.useEffect(() => {
	  if (isActive && time > 0) {
		countdownTimeout = setTimeout(() => {
		   setTime(time - 1);
		 }, 0.1);
	  } else if (isActive && time === 0) {
		startNewChallenge();
		setHasFinished(true);
		setIsActive(false);
	  }
	}, [isActive, time]);

	function startCountdown() {
	  setIsActive(true);
	}

	function resetCountdown() {
	  clearTimeout(countdownTimeout);
	  setIsActive(false);
	  setTime(25 * 60);
	  setHasFinished(false);
	}

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        resetCountdown,
        hasFinished,
        startCountdown,
        minutes,
        seconds
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
