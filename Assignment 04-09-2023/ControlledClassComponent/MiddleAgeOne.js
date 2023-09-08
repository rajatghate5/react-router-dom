import React from "react";

export default class MiddleAgeOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age1: undefined,
      age2: undefined,
      age3: undefined,
      res: undefined,
      display: false,
    };
  }

  check = (e) => {
    var a = parseInt(this.state.age1);
    var b = parseInt(this.state.age2);
    var c = parseInt(this.state.age3);
    var s = "Middle age is ";

    if ((a > b && a < c) || (a > c && a < b)) {
      s += a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
      s += b;
    } else {
      s += c;
    }
    this.setState({ res: s, display: true });
    e.preventDefault();
  };


  render() {
    return (
      <div id="container" className="df-col">
        <h2>Calculate Middle Age</h2>
        <div className="card df-col">
          <input
            type="text"
            placeholder="Enter 1st Age"
            onChange={(e) => this.setState({ age1: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter 2nd Age"
            onChange={(e) => this.setState({ age2: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter 3rd Age"
            onChange={(e) => this.setState({ age3: e.target.value })}
          />
          <input type="button" value="Click" onClick={this.check} />
          {this.state.display ? <h3>{this.state.res}</h3> : <h3></h3>}
        </div>
      </div>
    );
  }
}
