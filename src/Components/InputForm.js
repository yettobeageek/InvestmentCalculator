import React, { useState } from "react";

const initialState = {
  "current-savings": 10000,
  "yearly-contribution": 1000,
  "expected-return": 8,
  duration: 3,
};

function InputForm(props) {
  const [userInput, setUserInput] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput({
      "current-savings": '',
      "yearly-contribution": '',
      "expected-return": '',
      duration: '',
    });
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <div>
      {" "}
      <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) => {
                inputChangeHandler("current-savings", event.target.value);
              }}
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) => {
                inputChangeHandler("yearly-contribution", event.target.value);
              }}
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) => {
                inputChangeHandler("expected-return", event.target.value);
              }}
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              onChange={(event) => {
                inputChangeHandler("duration", event.target.value);
              }}
              value={userInput.duration}
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default InputForm;
