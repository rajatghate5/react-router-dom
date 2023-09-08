import { useRef } from "react";

const CheckVowelTwo = () => {
  const name = useRef(undefined);

  const check = (e) => {
    var names = name.current.value.toLowerCase();
    var countVowel = 0;
    var countConsonant = 0;
    var s;
    for (var i of names) {
      if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
        countVowel++;
      else countConsonant++;
    }

    s = `The total vowel is ${countVowel} and total consonant is ${countConsonant}`;
    alert(s);
    e.preventDefault();
  };
  return (
    <div id="container" className="df-col">
      <h2>Count Vowel & Consonant</h2>
      <div className="card df-col">
        <input type="text" placeholder="Enter Name" ref={name} />
        <input type="button" value="Click" onClick={check} />
      </div>
    </div>
  );
};

export default CheckVowelTwo;
