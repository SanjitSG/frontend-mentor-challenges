import React from "react";
import InputContainer from "./InputContainer";
import ResultContainer from "./ResultContainer";

const MainContainer = () => {
  return (
    <div className="bg-white md:rounded-2xl shadow-xl md:flex md:flex-row md:h-4/6">
      <InputContainer />
      <ResultContainer />
    </div>
  );
};

export default MainContainer;
