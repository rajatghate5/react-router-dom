import React from "react";

export default class RepeatedCharacterThree extends React.Component {
  constructor(props) {
    super(props);
    this.fname = React.createRef();
  }

  check = (e) => {
    var fName = this.fname.current.value.toLowerCase();
    var count = 0;
    var arr = [];
    var s;
    
    for (var i = 0; i < fName.length; i++) {
      for (var j = i + 1; j < fName.length; j++) {
        if (fName[i] === " ") {
          break;
        }

        if (fName[i] === fName[j]) {
          var flag = true;
          for (var k of arr) {
            if (fName[i] === k) {
              flag = false;
              break;
            }
          }
          if (flag) {
            count++;
            arr.push(fName[i]);
            break;
          }
        }
      }
    }

    s = `The total repeated characters is ${count}`;
    alert(s);
    e.preventDefault();
  };

  render() {
    return (
      <div id="container" className="df-col">
        <h2>Count Repeated Character</h2>
        <div className="card df-col">
          <input type="text" placeholder="Enter Full Name" ref={this.fname} />
          <input type="button" value="Click" onClick={this.check} />
        </div>
      </div>
    );
  }
}
