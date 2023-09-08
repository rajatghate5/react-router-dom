import { useRef } from "react";

const MiddleAgeTwo = () => {
  const age1 = useRef(undefined);
  const age2 = useRef(undefined);
  const age3 = useRef(undefined);

  const check = (e) => {
    var a = parseInt(age1.current.value);
    var b = parseInt(age2.current.value);
    var c = parseInt(age3.current.value);
    var s = "The middle age is ";

    if ((a > b && a < c) || (a > c && a < b)) {
      s += a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
      s += b;
    } else {
      s += c;
    }
   alert(s)
    e.preventDefault();
  };

  return (
    <div id="container" className="df-col">
      <h2>Check Middle Age</h2>
      <div className="card df-col">
        <input type="text" placeholder="Enter 1st Age" ref={age1} />
        <input type="text" placeholder="Enter 2nd Age" ref={age2} />
        <input type="text" placeholder="Enter 3rd Age" ref={age3} />
        <input type="button" value="Click" onClick={check} />
      </div>
    </div>
  );
};

export default MiddleAgeTwo;
