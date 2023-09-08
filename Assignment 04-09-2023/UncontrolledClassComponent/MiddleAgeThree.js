import React from "react";

export default class MiddleAgeThree extends React.Component {
  constructor(props) {
    super(props);
    this.age1 = React.createRef();
    this.age2 = React.createRef();
    this.age3 = React.createRef();
  }

  check = (e) => {
    var a = parseInt(this.age1.current.value);
    var b = parseInt(this.age2.current.value);
    var c = parseInt(this.age3.current.value);
    var s = "The middle age is ";

    if ((a > b && a < c) || (a > c && a < b)) s += a;
    else if ((b > a && b < c) || (b > c && b < a)) s += b;
    else s += c;

    alert(s);
    e.preventDefault();
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Check Middle Age</h2>
        <div className="card df-col">
          <input type="text" placeholder="Enter 1st Age" ref={this.age1} />
          <input type="text" placeholder="Enter 2nd Age" ref={this.age2} />
          <input type="text" placeholder="Enter 3rd Age" ref={this.age3} />
          <input type="button" value="Click" onClick={this.check} />
        </div>
      </div>
    );
  }
}
