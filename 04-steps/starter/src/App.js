const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  let step = 1;

  function handlePrevious() {
    step += 1;
  }

  function handleNext() {
    step += 1;
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handleNext}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={handlePrevious}
        >
          Next
        </button>
      </div>
    </div>
  );
}
