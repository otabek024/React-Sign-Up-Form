import React from "react";
import UseInput from "../hooks/UseInput";
import "../App.css";

const isNotEmpty = (value) => /^[A-Za-z,.'-]+$/.test(value);
const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
const isPassword = (value) =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value);

const passwordsMatch = (password, confirmPassword) => password === confirmPassword;


const BasicForm = (props) => {
  const {
    value: userNameValue,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlueHandler: userNameBlurHandler,
    reset: resetUserName,
  } = UseInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlueHandler: emailBlurHandler,
    reset: resetEmail,
  } = UseInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlueHandler: passwordBlurHandler,
    reset: resetPassword,
  } = UseInput(isPassword);

  const {
    value: confirmPasswordValue,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlueHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = UseInput(isPassword);

  const passwordsMatch = passwordValue === confirmPasswordValue;

  // let formIsValid = false;

  // if (
  //   userNameIsValid &&
  //   userLastNameIsValid &&
  //   emailIsValid &&
  //   passwordIsValid &&
  //   confirmPasswordIsValid
  // ) {
  //   formIsValid = true;
  // }
  const formIsValid = userNameIsValid &&
  emailIsValid &&
  passwordIsValid &&
  confirmPasswordIsValid &&
  passwordsMatch; // 

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted");
    console.log(userNameValue, emailValue, passwordValue, confirmPasswordValue);

    resetUserName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  const userNameClasses = userNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError 
    ? "form-control invalid" 
    : "form-control";

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  const confirmPasswordClasses = confirmPasswordHasError || !passwordsMatch
  ? "form-control invalid"
  : "form-control";  

  return (
    <form onSubmit={submitHandler}>
      <h1>Sign Up</h1>
      <div className="control-group">
        <div className={userNameClasses}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            value={userNameValue}
            onChange={userNameChangeHandler}
            onBlur={userNameBlurHandler}
          />
          {userNameHasError && (
            <p className="error-text">Looks like invalid first name</p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Looks like invalid email address</p>
          )}
        </div>
        <div className={passwordClasses}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className="error-text">Looks like invalid password</p>
          )}
        </div>
        <div className={confirmPasswordClasses}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            value={confirmPasswordValue}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
          />
          {confirmPasswordHasError && (
            <p className="error-text">Passwords do not match</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
