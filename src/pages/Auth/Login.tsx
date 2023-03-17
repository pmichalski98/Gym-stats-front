import React, {ChangeEvent, useState} from 'react';
import Button from "../../components/Button";
import Input from "../../components/Input";
import {useSigninMutation} from "../../store";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";
import ErrorAlert from "../../components/ErrorAlert";
import SkeletonLoader from "../../components/SkeletonLoader";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const [signin, {isLoading, error,isError}] = useSigninMutation();
    const {setCurrentUser} = useAuth();

    console.log(error,isError)
    function emailOnChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function passwordOnChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    if (!isLoading && error){
        setErrorMsg('Failed to login')
    }
    async function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await signin({email, password})
        } catch(err) {
            console.log(`Caught error by me ${err}`)
        }
    }
    const content = <form onSubmit={handleFormSubmit} className="w-fit mx-auto flex flex-col  gap-4 ">
        <h2>Log In</h2>
        {errorMsg && <ErrorAlert message={errorMsg}/>}
        <Input type="email" placeholder="Email" value={email} onChange={emailOnChange}/>
        <Input type="password" placeholder="Password" value={password} onChange={passwordOnChange}/>
        <Button disabled={isLoading} variant="primary">Login</Button>
        <p>Don't have an account ? <Link to='/signup'>Sign Up</Link></p>
    </form>

    return (
        <div className="text-center pt-10">
            {!isLoading ? content : <SkeletonLoader times={5} className="h-10 w-full"/>}
        </div>
    );
}

export default Login;