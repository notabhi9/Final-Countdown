import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const [ PlayerName, setPlayerName] = useState('unknown entity');
  const PlayerInput = useRef();

  function handleClick(){
    setPlayerName(PlayerInput.current.value);
    PlayerInput.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {PlayerName}</h2>
      <p>
        <input ref={PlayerInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
