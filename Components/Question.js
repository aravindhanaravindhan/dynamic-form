// /src/components/Question.js
import React from "react";
import { formData } from "../Data/formData"; // Import the form data JSON structure

const Question = ({ questionKey, handleChange, formDataState }) => {
  // Safely retrieve the question from the formData structure
  const question = formData.questions[questionKey];

  // If question is undefined, return null or some fallback (error handling)
  if (!question) {
    console.error(`No question found for key: ${questionKey}`);
    return <div className="error">Error: Invalid question key</div>;
  }

  // Render the input field based on question type
  const renderInputField = () => {
    switch (question.type) {
      case "text":
        return (
          <input
            type="text"
            value={formDataState[questionKey] || ""}
            onChange={(e) => handleChange(questionKey, e.target.value)}
          />
        );

      case "number":
        return (
          <input
            type="number"
            value={formDataState[questionKey] || ""}
            onChange={(e) => handleChange(questionKey, e.target.value)}
          />
        );

      case "date":
        return (
          <input
            type="date"
            value={formDataState[questionKey] || ""}
            onChange={(e) => handleChange(questionKey, e.target.value)}
          />
        );

      case "radio":
        return (
          question.options &&
          question.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={questionKey}
                value={option}
                checked={formDataState[questionKey] === option}
                onChange={(e) => handleChange(questionKey, e.target.value)}
              />
              {option}
            </label>
          ))
        );

      case "select":
        return (
          <select
            value={formDataState[questionKey] || ""}
            onChange={(e) => handleChange(questionKey, e.target.value)}
          >
            <option value="">Select...</option>
            {question.options &&
              question.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        );

      case "file":
        return (
          <input
            type="file"
            onChange={(e) => handleChange(questionKey, e.target.files[0])}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="question">
      <label>{question.label}</label>
      {renderInputField()}
    </div>
  );
};

export default Question;
