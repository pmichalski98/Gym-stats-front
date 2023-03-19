import React, { type ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useSigninMutation } from "../../store";
import { useAuth } from "../../contexts/AuthContext";
import ErrorAlert from "../../components/ErrorAlert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const [signin, { isLoading, error, data }] = useSigninMutation();
  const { setCurrentUser } = useAuth();

  function emailOnChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function passwordOnChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await signin({ email, password });
    } catch (e) {
      console.log("catch zadzialal");
    }
  }

  let content;
  useEffect(() => {
    setErrorMsg(error.data.message);
  }, [error]);

  if (data) {
    setCurrentUser(data);
    navigate("/");
  } else {
    content = (
      <form
        onSubmit={handleFormSubmit}
        className="w-fit mx-auto flex flex-col  gap-4 "
      >
        <h2>Log In</h2>
        {error != null && <ErrorAlert message={errorMsg} />}
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
        <Button
          disabled={isLoading}
          variant="primary"
          className="flex justify-center"
        >
          {isLoading ? <ClipLoader color="cyan" size={50} /> : "Login"}
        </Button>
        <p>
          Don't have an account ?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    );
  }

  return <div className="text-center pt-10">{content}</div>;
}

export default Login;
