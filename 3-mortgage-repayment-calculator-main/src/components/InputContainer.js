import React from "react";
import { numInput, radioData } from "../utils/data";
import InputCreator from "./InputCreator";
import RadioInput from "./RadioInput";

//handleSubmit =>
const handleSubmit = (e) => {
  e.preventDefault();
  // calculate logic
  e.target.reset();
};
const InputContainer = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="heading">
          <h2>Mortgage Calculator</h2>
          <a>Clear All</a>
        </div>
        {numInput.map((input, i) => (
          <InputCreator
            key={i}
            inputData={input}
          />
        ))}
        <RadioInput data={radioData} />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default InputContainer;
