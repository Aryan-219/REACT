import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return <div>
    <Steps />
    <Steps />
  </div>
}
  function Steps(){
  const [step,setStep]=useState(1);
  // const [test,setTest]=useState({name:"aryan"});
  const [isOpen, setIsOpen] = useState(true);
  
  function handleNext(){
    if(step<3) 
    setStep(s => s+1);
    // setStep(s => s+1);
    // Correct manner
    // setTest({name:"bhai mere"});
    
    // Bad Practise
    // test.name="mere bhai";
  }
  function handlePrevious(){
    if(step>1) setStep(s => s-1);
    
    // Correct manner
    // setTest({name:"aryan"});
    // Bad Practise
    // test.name="aryan";
  }
  function toggle(){
    setIsOpen(is => !is);
  }
    
  return (
    <div>
      <button className="close" onClick={toggle}>&times;</button>
    {isOpen && <div className="steps">
      <div className="numbers">
        <div className={step >=1?"active":""}>1</div>
        <div className={step >=2?"active":""}>2</div>
        <div className={step >=3?"active":""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step-1]}
        {/* {test.name} */}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>}
    </div>
  );
}
