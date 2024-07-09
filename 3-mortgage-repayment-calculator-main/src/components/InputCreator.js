import React from "react";

const InputCreator = ({ inputData }) => {
  const { label, symbol, symbolPosition, type, name } = inputData;

  const flexDirection = symbolPosition === "left" ? "row" : "row-reverse";

  return (
    <div
      id="text-input-container"
      className="space-y-2 flex flex-col"
    >
      <label htmlFor={name}>{label}</label>
      <div
        className={`border border-red-400 rounded-md overflow-hidden flex flex-${flexDirection}`}
      >
        <span className={`font-bold`}>{symbol}</span>
        <input
          type={type}
          name={name}
          id={name}
        />
      </div>
      {/* add on hover and on error states */}
    </div>
  );
};
export default InputCreator;
