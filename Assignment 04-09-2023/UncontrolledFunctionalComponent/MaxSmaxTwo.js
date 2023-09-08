import { useRef} from "react";

const MaxSmaxTwo = () => {
  const stu1 = useRef(undefined);
  const stu2 = useRef(undefined);
  const stu3 = useRef(undefined);
  const stu4 = useRef(undefined);
  const stu5 = useRef(undefined);

  const check = (e) => {
    var arr = [];
    var max = 0;
    var smax = 0;
    var s;
    arr.push(
      parseInt(stu1.current.value),
      parseInt(stu2.current.value),
      parseInt(stu3.current.value),
      parseInt(stu4.current.value),
      parseInt(stu5.current.value)
    );

    for (var i of arr) {
      if (i > 500 || i < 0) {
        alert("Invalid Marks");
        return;
      }
      if (i > max) {
        smax = max;
        max = i;
      } else if (smax < i) {
        smax = i;
      }
    }
    s = `The maximum is ${max} and second maximum is ${smax}`;
    alert(s);
    e.preventDefault();
  };

  return (
    <div id="container" className="df-col">
      <h2>Max & Second Max Number</h2>
      <div className="card df-col">
        <input
          type="text"
          placeholder="Enter 1st Student Marks / 500"
          ref={stu1}
        />
        <input
          type="text"
          placeholder="Enter 2nd Student Marks / 500"
          ref={stu2}
        />
        <input
          type="text"
          placeholder="Enter 3rd Student Marks / 500"
          ref={stu3}
        />
        <input
          type="text"
          placeholder="Enter 4th Student Marks / 500"
          ref={stu4}
        />
        <input
          type="text"
          placeholder="Enter 5th Student Marks / 500"
          ref={stu5}
        />
        <input type="button" value="Click" onClick={check} />
      </div>
    </div>
  );
};

export default MaxSmaxTwo;
