import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ErrorAlert from "../../components/ErrorAlert";
import { useSignupMutation } from "../../store";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const [signup, { isLoading, error, data }] = useSignupMutation();

  function emailOnChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function passwordOnChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function passwordConfirmOnChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordConfirm(event.target.value);
  }

  function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (password !== passwordConfirm) {
      return setErrorMsg("Passwords do not match !");
    }
    signup({ email, password });
    navigate("/login");
  }

  return (
    <div className="text-center pt-10">
      <form
        onSubmit={handleFormSubmit}
        className="w-fit mx-auto flex flex-col  gap-4 "
      >
        <h2 className="text-3xl">Create an account</h2>
        {errorMsg && <ErrorAlert message={errorMsg} />}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={emailOnChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordOnChange}
        />
        <Input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={passwordConfirmOnChange}
        />
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? <ClipLoader color="cyan" size={50} /> : "Sign Up"}
        </Button>
        <p>
          Already have an account ?
          <Link
            to="/login"
            className="text-cyan font-bold hover:text-darkerCyan"
          >
            {" "}
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
