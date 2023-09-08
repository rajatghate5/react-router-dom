import React from "react";

export default class MaxSmaxOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stu1: undefined,
      stu2: undefined,
      stu3: undefined,
      stu4: undefined,
      stu5: undefined,
      res: undefined,
      display: false,
    };
  }

  check = (e) => {
    var arr = [];
    var max = 0;
    var smax = 0;
    var s;
    arr.push(
      this.state.stu1,
      this.state.stu2,
      this.state.stu3,
      this.state.stu4,
      this.state.stu5
    );
    for (var i of arr) {
      if (i > 500 || i < 0) {
        alert("Invalid Marks");
        this.setState({ display: false });
        return;
      }
      if (i > max) {
        smax = max;
        max = i;
      } else if (smax < i) {
        smax = i;
      }
    }
    s = `The maximum value is ${max} and second maximum value is ${smax}`;
    this.setState({ res: s, display: true });
    e.preventDefault();
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Max & Second Max Number</h2>
        <div className="card df-col">
          <input
            type="text"
            placeholder="Enter 1st Student Marks / 500"
            onChange={(e) => this.setState({ stu1: parseInt(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Enter 2nd Student Marks / 500"
            onChange={(e) => this.setState({ stu2: parseInt(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Enter 3rd Student Marks / 500"
            onChange={(e) => this.setState({ stu3: parseInt(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Enter 4th Student Marks / 500"
            onChange={(e) => this.setState({ stu4: parseInt(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Enter 5th Student Marks / 500"
            onChange={(e) => this.setState({ stu5: parseInt(e.target.value) })}
          />
          <input type="button" value="Click" onClick={this.check} />
        </div>
        {this.state.display ? <h3>{this.state.res}</h3> : <h3></h3>}
      </div>
    );
  }
}
