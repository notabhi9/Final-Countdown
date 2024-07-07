import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, challengeTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(challengeTime * 1000);
  const isRunning = timeRemaining > 0 && timeRemaining < challengeTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(challengeTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={challengeTime}
        remTime={timeRemaining}
        onReset={handleReset}
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {challengeTime} second{challengeTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isRunning ? handleStop : handleStart}>
            {isRunning ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isRunning ? "active" : undefined}>
          {isRunning ? "Timer is running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
