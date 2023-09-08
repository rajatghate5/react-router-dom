import React from "react";

export default class MaxSmaxThree extends React.Component {
  constructor(props) {
    super(props);
    this.m1 = React.createRef();
    this.m2 = React.createRef();
    this.m3 = React.createRef();
    this.m4 = React.createRef();
    this.m5 = React.createRef();
  }

  check = (e) => {
    var arr = [];
    var max = 0;
    var smax = 0;
    arr.push(
      parseInt(this.m1.current.value),
      parseInt(this.m2.current.value),
      parseInt(this.m3.current.value),
      parseInt(this.m4.current.value),
      parseInt(this.m5.current.value)
    );

    for (var i of arr) {
      if (i > 500 || i < 0) {
        alert("Invalid Marks")
        return;
      }
      if (i > max) {
        smax = max;
        max = i;
      } else if (i > smax) {
        smax = i;
      }
    }
    alert(`The maximum is ${max} and second maximum is ${smax}`);
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
            ref={this.m1}
          />
          <input
            type="text"
            placeholder="Enter 2nd Student Marks / 500"
            ref={this.m2}
          />
          <input
            type="text"
            placeholder="Enter 3rd Student Marks / 500"
            ref={this.m3}
          />
          <input
            type="text"
            placeholder="Enter 4th Student Marks / 500"
            ref={this.m4}
          />
          <input
            type="text"
            placeholder="Enter 5th Student Marks / 500"
            ref={this.m5}
          />
          <input type="button" value="Click" onClick={this.check} />
        </div>
      </div>
    );
  }
}
