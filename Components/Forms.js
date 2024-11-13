import React, { useState, useEffect } from "react";
import Question from "./Question";
import { formData } from "../Data/formData";

const Form = () => {
  const [formDataState, setFormDataState] = useState({});
  const [showSalarySlip, setShowSalarySlip] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormDataState(savedData);
    }
  }, []);

  console.log(formDataState);

  const handleChange = (questionKey, value) => {
    if (questionKey === "annualIncome" || questionKey === "mobileNumber") {
      // Ensure that annualIncome and mobileNumber accept only positive numbers
      if (parseInt(value, 10) < 0) {
        setError(`${formData.questions[questionKey].label} must be a positive value.`);
        return;
      }
    }

    setFormDataState((prevState) => ({
      ...prevState,
      [questionKey]: value instanceof File ? value : value,
    }));

    if (questionKey === "annualIncome") {
      const income = parseInt(value, 10);
      setShowSalarySlip(income > 50000);
    }
    setError("");
  };

  const validateForm = () => {
    for (let questionKey of Object.keys(formData.questions)) {
      if (questionKey === "dateOfBirth") continue;

      const value = formDataState[questionKey];

      if (!value) {
        setError(`Please complete the field: ${formData.questions[questionKey].label}`);
        return false;
      }
      

      // Additional validation for specific fields
      if (questionKey === "email") {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(value)) {
          setError("Please enter a valid email address.");
          return false;
        }
      }

      if (questionKey === "mobileNumber") {
        const mobilePattern = /^[0-9]{10}$/;
        if (!mobilePattern.test(value)) {
          setError("Please enter a valid 10-digit mobile number.");
          return false;
        }
      }

      if (questionKey === "annualIncome") {
        const income = parseInt(value, 10);
        if (income <= 0) {
          setError("Annual Income must be a positive value.");
          return false;
        }
      }
    }

    if (!validateMembersAllocation()) {
      return false;
    }

    setError("");
    return true;
  };

  const validateMembersAllocation = () => {
    const memberFields = ["member1Percentage", "member2Percentage", "member3Percentage"];
    const totalPercentage = memberFields.reduce(
      (sum, key) => sum + (parseFloat(formDataState[key]) || 0),
      0
    );

    if (totalPercentage !== 100) {
      setError("Total percentage for member allocation must equal 100%");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("FormData", JSON.stringify(formDataState));
      console.log("Form Data:", formDataState);
      alert("Form submitted successfully!");
    }
  };

  const renderSection = (sectionKey) => {
    return (
      <div className="form-section" key={sectionKey}>
        <h3>{sectionKey.replace(/([A-Z])/g, " $1")}</h3>
        {formData.sections[sectionKey].map((questionKey) => (
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

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData.sections).map((sectionKey) => renderSection(sectionKey))}

      {showSalarySlip && (
        <div className="form-section">
          <label>Salary Slip:</label>
          <input
            type="file"
            onChange={(e) => handleChange("salarySlip", e.target.files[0])}
          />
        </div>
      )}

      {error && <div className="error">{error}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
