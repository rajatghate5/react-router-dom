import { useState } from "react";

const CheckVowelConsonant = () => {
  const [name, setName] = useState("");
  const [res, setRes] = useState("");
  const [display, setDisplay] = useState(false);

  const check = () => {
    var countVowel = 0;
    var countConsonant = 0;
    var s = "";
    for (var i of name) {
      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        countVowel++;
      } else {
        countConsonant++;
      }
    }
    s = `The total vowel is ${countVowel} and total consonant is ${countConsonant}`;
    setRes(s);
    setDisplay(true);
  };
  return (
    <div id="container" className="df-col">
      <h2>Count Vowel and Consonant in Name</h2>
      <div className="card df-col">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value.toLowerCase())}
        />
        <input type="button" value="Click" onClick={check} />
      </div>
      {display ? <h3>{res}</h3> : <h3></h3>}
    </div>
  );
};

export default CheckVowelConsonant;
