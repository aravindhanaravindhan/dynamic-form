import React from "react";
import Question from "./Question";

const Section = ({ sectionName, questions, handleChange, formDataState }) => {
  return (
    <div>
      {questions.map((questionKey) => (
        <Question
          key={questionKey}
          questionKey={questionKey}
          handleChange={handleChange}
          formDataState={formDataState}
        />
      ))}
    </div>
  );
};

export default Section;
