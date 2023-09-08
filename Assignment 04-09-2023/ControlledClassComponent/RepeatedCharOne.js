import React from "react";

export default class RepeatedCharOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: undefined, res: undefined, display: undefined };
  }

  check = (e) => {
    var a = this.state.fname.toLowerCase();
    var count = 0;
    var arr = [];
    var s = "The total repeated characters count is  ";
    for (var i = 0; i < a.length; i++) {
      for (var j = i + 1; j < a.length; j++) {
        if (a[i] === " ") {
          break;
        }
        if (a[i] === a[j]) {
          var flag = true;
          for (var k of arr) {
            if (a[i] == k) {
              flag = false;
              break;
            }
          }
          if (flag) {
            count++;
            arr.push(a[i]);
            break;
          }
        }
      }
    }

    s += count;
    this.setState({ res: s, display: true });
    e.preventDefault();
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Repeated Characters Count</h2>
        <div className="card df-col">
          <input
            type="text"
            placeholder="Enter Full Name"
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
          <input type="button" value="Click" onClick={this.check} />
        </div>
        {this.state.display ? <h3>{this.state.res}</h3> : <h3></h3>}
      </div>
    );
  }
}
