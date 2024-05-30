import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  // Date.prototype.addDays = function (days) {
  //   var date = new Date(this.valueOf());
  //   date.setDate(date.getDate() + days);
  //   return date;
  // };

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  var date = new Date();

  // function increaseStep() {
  //   setStep(step + 1);
  // }
  // function decreaseStep() {
  //   if (step > 1) setStep(step - 1);
  // }
  function increaseCount() {
    setCount(count + step);
  }
  function decreaseCount() {
    setCount(count - step);
  }
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={decreaseStep}>-</button> */}
        Step {step}
        {/* <button onClick={increaseStep}>+</button> */}
      </div>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={increaseCount}>+</button>
      </div>

      <p>
        {count < 0 &&
          `${Math.abs(count)} days ago was  ${addDays(date, count)}   `}
      </p>
      <p>{count === 0 && `Today is ${addDays(date, count)}`}</p>
      <p>
        {/* {count > 0 && `${count} days from today is ${date.addDays(count)}`}{" "} */}
        {count > 0 && `${count} days from today is ${addDays(date, count)}`}{" "}
      </p>

      <div>
        {
          (count ===0 && step===1) ? "" :<button onClick={()=> (setStep(1), setCount(0))}>Reset</button>
        }
        
      </div>
    </>
  );
}
