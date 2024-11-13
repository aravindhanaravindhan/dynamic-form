// /src/utils/validation.js
export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  export const validatePercentage = (percentages) => {
    return Object.values(percentages).reduce((sum, val) => sum + val, 0) === 100;
  };
  