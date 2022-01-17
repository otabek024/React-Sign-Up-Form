import React, { useState } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlueHandler = (event) => {
    setIsTouched(event.target.value);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  } 

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlueHandler,
    reset
  };
};

export default UseInput;
