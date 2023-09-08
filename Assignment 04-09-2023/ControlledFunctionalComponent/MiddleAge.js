import { useState } from "react";

const MiddleAge = () => {
  const [ages, setAges] = useState({
    age1: undefined,
    age2: undefined,
    age3: undefined,
  });
  const [res, setRes] = useState(undefined);
  const [display, setDisplay] = useState(false);

  const check = (e) => {
    var a = ages.age1;
    var b = ages.age2;
    var c = ages.age3;
    var s = "Middle Age is ";
    if ((a > b && a < c) || (a < b && a > c)) {
      s += a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
      s += b;
    } else {
      s += c;
    }
    setRes(s);
    setDisplay(true);
    e.preventDefault()
  };

  return (
    <div id="container" className="df-col">
      <h2>Calculate Middle Age</h2>
      <div className="card df-col">
        <input
          type="text"
          placeholder="Enter First Age "
          onChange={(e) => setAges({ ...ages, age1: parseInt(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Enter Second Age "
          onChange={(e) => setAges({ ...ages, age2: parseInt(e.target.value) })}
        />
        <input
          type="text"
          placeholder="Enter Third Age "
          onChange={(e) => setAges({ ...ages, age3: parseInt(e.target.value) })}
        />
        <input type="button" value="Click" onClick={check} />
        {display ? <h3>{res}</h3> : <h3></h3>}
      </div>
    </div>
  );
};

export default MiddleAge;
