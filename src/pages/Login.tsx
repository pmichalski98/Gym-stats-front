import React, {ChangeEvent, useState} from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import {useSigninMutation} from "../store";

function Login() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [] = useSigninMutation();

    function emailOnChange(event: ChangeEvent<HTMLInputElement>) {
        setEmailValue(event.target.value);
    }
    function passwordOnChange(event: ChangeEvent<HTMLInputElement>) {
        setPasswordValue(event.target.value);
    }
    function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

    }


    return (
        <div className="text-center mt-10">
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 inline-grid gap-4">
                <Input type="email" placeholder="Email" value={emailValue} onChange={emailOnChange} />
                <Input type="password" placeholder="Password" value={passwordValue} onChange={passwordOnChange}/>
                <Button variant="primary" >Login</Button>
            </form>
        </div>
    );
}

export default Login;