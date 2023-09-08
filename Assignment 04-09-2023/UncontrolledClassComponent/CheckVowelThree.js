import React from "react";

export default class CheckVowelThree extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
  }

  check = (e) => {
    var a = this.name.current.value.toLowerCase();
    var countVowel = 0;
    var countConsonant = 0;
    var s;
    for (var i of a) {
      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
        countVowel++;
      else countConsonant++;
    }

    s = `The total vowel is ${countVowel} and total consonant ${countConsonant}`;
    alert(s);
    e.preventDefault();
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Count Vowel & Consonant</h2>
        <div className="card df-col">
          <input type="text" placeholder="Enter Name" ref={this.name} />
          <input type="button" value="Click" onClick={this.check} />
        </div>
      </div>
    );
  }
}
