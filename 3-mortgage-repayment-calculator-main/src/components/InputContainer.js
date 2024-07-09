import React from "react";
import { numInput } from "../utils/data";
import InputCreator from "./InputCreator";
const InputContainer = () => {
  return (
    <div>
      {numInput.map((input) => (
        <InputCreator inputData={input} />
      ))}
    </div>
  );
};

export default InputContainer;
