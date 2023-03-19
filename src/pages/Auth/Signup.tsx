import React, { ChangeEvent, useEffect, useState } from "react";
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

  function emailOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value);
  }

  function passwordOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  function passwordConfirmOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setPasswordConfirm(event.target.value);
  }

  // eslint-disable-next-line consistent-return
  async function handleFormSubmit(
    event: ChangeEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (password !== passwordConfirm) {
      return setErrorMsg("Passwords do not match !");
    }
    try {
      await signup({ email, password });
    } catch (err) {
      throw new Error(`Catch worked err: ${err}`);
    }
  }

  useEffect(() => {
    if (error) {
      setErrorMsg(error.data.message);
    }
  }, [error]);

  if (data) {
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
