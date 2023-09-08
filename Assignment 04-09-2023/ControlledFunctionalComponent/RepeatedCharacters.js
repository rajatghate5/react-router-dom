import { useState } from "react";

const RepeatedCharacters = () => {
  const [name, setName] = useState("");
  const [res, setRes] = useState("");
  const [display, setDisplay] = useState(false);
  
  const check = (e) => {
    var names = name.toLowerCase();
    var arr = [];
    var count = 0;
    var s = "The total repeated characters count is ";
    for (let i = 0; i < names.length; i++) {
      for (var j = i + 1; j < names.length; j++) {
        if (names[i] === " ") {
          break;
        }
        if (names[i] === names[j]) {
          var flag = true;
          for (var k of arr) {
            if (names[i] == k) {
              flag = false;
              break;
            }
          }
          if (flag) {
            count++;
            arr.push(names[i])
            break;
          }
        }
      }
    }
    s += count;
    setRes(s);
    setDisplay(true);
    e.preventDefault()
  };

  return (
    <div id="container" className="df-col">
      <h2>Repeated Characters Count</h2>
      <div className="card df-col">
        <input
          type="text"
          placeholder="Enter Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="button" value="Click" onClick={check} />
      </div>
      {display ? <h3>{res}</h3> : <h3></h3>}
    </div>
  );
};

export default RepeatedCharacters;
