import { useState } from "react";

const CharacterLimit = () => {
  const [dis, setDis] = useState(false);
  const check = (e) => {
    if (e.target.value.length > 300) {
      setDis(true);
    }
  };

  return (
    <div id="container" className="df-col">
      <h2>Character Limit Upto 300</h2>
      <div className="card">
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter a Message"
          disabled={dis}
          onInput={(e) => check(e)}
        ></textarea>
      </div>
    </div>
  );
};

export default CharacterLimit;
