import { useRef } from "react";

const RepeatedCharacterTwo = () => {
  const fname = useRef(undefined);

  const check = (e) => {
    var fName = fname.current.value.toLowerCase();
    var arr = [];
    var count = 0;
    var s = "The total repeated characters is ";
    for (var i = 0; i < fName.length; i++) {
      for (var j = i + 1; j < fName.length; j++) {
        if (fName[i] === " ") {
          break;
        }

        if (fName[i] == fName[j]) {
          var flag = true;
          for (var k of arr) {
            if (fName[i] == k) {
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
    s += count;
    alert(s);
    e.preventDefault();
  };
  return (
    <div id="container" className="df-col">
      <h2>Repeated Character Count</h2>
      <div className="card df-col">
        <input type="text" placeholder="Enter Full Name" ref={fname} />
        <input type="button" value="Click" onClick={check} />
      </div>
    </div>
  );
};

export default RepeatedCharacterTwo;
