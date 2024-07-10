import React from "react";
import InputContainer from "./InputContainer";
import ResultContainer from "./ResultContainer";

const MainContainer = () => {
  return (
    <div className="bg-white  p-4 md:rounded-xl shadow-xl md:flex md:flex-row">
      <InputContainer />
      <ResultContainer />
    </div>
  );
};

export default MainContainer;
