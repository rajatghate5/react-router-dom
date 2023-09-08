import { useRef } from "react";

const CharacterLimitTwo = () => {
  const text = useRef(undefined);
  const handle = (e) => {
    var a = text.current.value;
    if (a.length > 300) {
      text.current.disabled = true;
    }
    e.preventDefault();
  };

  return (
    <div id="container" className="df-col">
      <h2>Character Limit is 300</h2>
      <div className="card df-col">
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter a Message"
          ref={text}
          onInput={handle}
        ></textarea>
      </div>
    </div>
  );
};

export default CharacterLimitTwo;
