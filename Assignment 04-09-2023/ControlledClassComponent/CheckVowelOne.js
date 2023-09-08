import React from "react";

export default class CheckVowelOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: undefined, res: undefined, display: false };
  }

  check = (e) => {
    var nameOne = this.state.name.toLowerCase();
    var countVowel = 0;
    var countConsonant = 0;
    var s = "";
    for (var i of nameOne) {
      if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
        countVowel++;
      else countConsonant++;
    }

    s = `The total vowel is ${countVowel} and total consonant is ${countConsonant}`;
    this.setState({ res: s, display: true });
    e.preventDefault();
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Count Vowel & Consonant</h2>
        <div className="card df-col">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input type="button" value="Click" onClick={this.check} />
        </div>
        {this.state.display ? <h3>{this.state.res}</h3> : <h3></h3>}
      </div>
    );
  }
}
