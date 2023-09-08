import { useState } from "react";

const MaxSMax = () => {
  const [marks, setMarks] = useState({
    stu1: undefined,
    stu2: undefined,
    stu3: undefined,
    stu4: undefined,
    stu5: undefined,
  });

  const [res, setRes] = useState(undefined);
  const [display, setDisplay] = useState(false);

  const check = (e) => {
    var arr = [];
    var max = 0;
    var smax = 0;
    arr.push(
      parseInt(marks.stu1),
      parseInt(marks.stu2),
      parseInt(marks.stu3),
      parseInt(marks.stu4),
      parseInt(marks.stu5)
    );

    for (var i of arr) {
      if (i > 500 || i < 0) {
        alert("Invalid Marks");
        setDisplay(false)
        return;        
      } else if (i > max) {
        smax = max;
        max = i;
      } else if (smax < i) {
        smax = i;
      }
      setRes(`The Maximum is ${max} Second Maximum is ${smax}`);
      setDisplay(true);
    }
    e.preventDefault();
  };

  return (
    <div id="container" className="df-col">
      <h2>Max & Second Max Number</h2>
      <div className="card df-col">
        <input
          type="text"
          placeholder="Enter First Student Total Marks / 500"
          onChange={(e) => setMarks({ ...marks, stu1: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Second Student Total Marks / 500"
          onChange={(e) => setMarks({ ...marks, stu2: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Third Student Total Marks / 500"
          onChange={(e) => setMarks({ ...marks, stu3: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Fourth Student Total Marks / 500"
          onChange={(e) => setMarks({ ...marks, stu4: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Fifth Student Total Marks / 500"
          onChange={(e) => setMarks({ ...marks, stu5: e.target.value })}
        />
        <input type="button" value="Click" onClick={check} />
      </div>
      {display ? <h3>{res}</h3> : <h3></h3>}
    </div>
  );
};

export default MaxSMax;
