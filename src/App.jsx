import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" challengeTime={1} />
        <TimerChallenge title="Not Easy" challengeTime={5} />
        <TimerChallenge title="Getting tough" challengeTime={10} />
        <TimerChallenge title="Pros only" challengeTime={15} />
      </div>
    </>
  );
}

export default App;
