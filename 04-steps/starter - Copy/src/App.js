import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Steps() {
  const [bill, setBill] = useState(0);
  const [rate1, setRate1] = useState(0);
  const [rate2, setRate2] = useState(0);
  const avgRate = (+rate1 + +rate2) / 2;

  function reset() {
    setBill(0);
    setRate1(0);
    setRate2(0);
  }

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isRotated, setIsRotated] = useState("close");

  function handlePrevious() {
    step > 1 && setStep((cur) => cur - 1);
  }

  function handleNext() {
    step < 3 && setStep((cur) => cur + 1);
  }

  function handleClose() {
    setIsOpen((is) => !is);

    if (isRotated === "close") {
      setIsRotated("close rotate");
    }

    if (isRotated === "close rotate") {
      setIsRotated("close");
    }
  }

  return (
    <>
      <Bill bill={bill} onSetBill={setBill} />
      <Rating
        rate={rate1}
        onSetRate={setRate1}
        text="How did you like the service?"
      />
      <Rating
        rate={rate2}
        onSetRate={setRate2}
        text="How did your like the service?"
      />
      <Total bill={bill} avgRate={avgRate} />
      <ResetButton reset={reset} />
    </>

    // <>
    //   <button className={isRotated} onClick={handleClose}>
    //     &times;
    //   </button>
    //   {isOpen && (
    //     <div className="steps">
    //       <div className="numbers">
    //         <div className={step >= 1 ? "active" : ""}>1</div>
    //         <div className={step >= 2 ? "active" : ""}>2</div>
    //         <div className={step >= 3 ? "active" : ""}>3</div>
    //       </div>

    //       <StepMessage step={step}>{messages[step - 1]}</StepMessage>

    //       <div className="buttons">
    //         <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
    //           👈 Previous
    //         </Button>
    //         <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
    //           Next 👉
    //         </Button>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}:</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        value={bill}
        // placeholder="s"
        onChange={(e) => onSetBill(+e.target.value)}
      ></input>
    </div>
  );
}

function Rating({ rate, onSetRate, text }) {
  return (
    <div>
      <label>{text} </label>
      <select onChange={(e) => onSetRate(e.target.value)} value={rate}>
        <option value="0.0">Dissatisfied (0%)</option>
        <option value="0.05">It was okay (5%)</option>
        <option value="0.1">It was good (10%)</option>
        <option value="0.2">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, avgRate }) {
  const total = bill + bill * avgRate;
  const tip = (bill * avgRate).toFixed(2);

  return (
    <h1>
      You pay ${total} (${bill} + ${tip}
      tip)
    </h1>
  );
}

function ResetButton({ reset }) {
  return <button onClick={reset}>Reset</button>;
}
