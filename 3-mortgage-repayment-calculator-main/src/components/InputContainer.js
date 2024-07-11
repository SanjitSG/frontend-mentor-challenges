import React from "react";
import calculatorIcon from "../images/icon-calculator.svg";
//handleSubmit =>
const handleSubmit = (e) => {
  e.preventDefault();
  // calculate logic
  e.target.reset();
};
const InputContainer = () => {
  return (
    <div className="m-2 p-3 md:w-6/12">
      <form
        onSubmit={handleSubmit}
        className="space-y-3"
      >
        <div
          id="heading"
          className="md:flex"
        >
          <h2 className="text-Slate900 text-2xl font-bold">Mortgage Calculator</h2>
          <p className="underline cursor-pointer text-sm text-Slate500">Clear All</p>
        </div>
        {/* input 1 */}
        <div className="mx-1 space-y-1">
          <label
            htmlFor="mortgage-amount"
            className=" text-Slate700"
          >
            Mortgage Amount
          </label>
          <div className="border border-Slate500 rounded-md overflow-hidden">
            <span className="font-bold  py-3 px-4 bg-Slate100">£</span>
            <input
              type="text"
              className="outline-none py-2 pl-1 text-xl text-primaryLime border-black border"
            />
          </div>
        </div>

        {/* input 2 */}
        <div className="space-y-1">
          <div>
            <label
              htmlFor="years"
              className=" text-Slate700"
            >
              Mortgage Term
            </label>
            <div className=" relative border border-Slate500 rounded-md overflow-hidden py-2">
              <input
                type="text"
                className=" w-9/12 pl-1 text-xl text-primaryLime"
              />
              <span className="font-bold py-3 px-4 bg-Slate100 w-3/12 right-0">years</span>
            </div>
          </div>

          {/* input 3 */}
          <>
            <label
              htmlFor="interest"
              className=" text-Slate700"
            >
              Interest Rate
            </label>
            <input
              type="text"
              className="outline-none w-10/12 py-2 pr-1 text-xl text-primaryLime"
            />
            <span className="font-bold w-2/12 py-3 px-4 bg-Slate100">%</span>
          </>
          <>
            <label htmlFor="mortgage-type">Mortgage Type</label>
            <div>
              <input
                type="radio"
                name="mortgage-type"
                value="1"
              />
              <span>Repayment</span>
            </div>
            <div>
              <input
                type="radio"
                name="mortgage-type"
                value="2"
              />
              <span>Interest Only</span>
            </div>
          </>
        </div>
        <div className="p-3 mx-3 flex items-center justify-center font-bold space-x-2 bg-primaryLime rounded-full">
          <img
            src={calculatorIcon}
            alt="calculator-icon"
          />
          <input
            type="button"
            value="Calculate Repayments"
          />
        </div>
      </form>
    </div>
  );
};

export default InputContainer;
