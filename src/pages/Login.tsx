import React, {ChangeEvent, useState} from 'react';
import Button from "../components/Button";
import Input from "../components/Input";
import {useFetchAllTrainingsQuery, useSigninMutation, useSignoutMutation} from "../store";

function Login() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [signin] = useSigninMutation();
    const [signout] = useSignoutMutation();
    const {data, isLoading, isError} = useFetchAllTrainingsQuery();

    function emailOnChange(event: ChangeEvent<HTMLInputElement>) {
        setEmailValue(event.target.value);
    }
    function passwordOnChange(event: ChangeEvent<HTMLInputElement>) {
        setPasswordValue(event.target.value);
    }
    async function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        const res = await signin({email: emailValue, password: passwordValue})
        console.log(res)
    }
     const handleLogout = async () =>{
        const res = await signout();
         console.log(res)
    }

    const handleTest = async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="text-center mt-10">
            <Button onClick={handleLogout} variant="secondary">Logout</Button>
            <Button onClick={handleTest} variant="secondary">Get trainings</Button>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 inline-grid gap-4">
                <Input type="email" placeholder="Email" value={emailValue} onChange={emailOnChange} />
                <Input type="password" placeholder="Password" value={passwordValue} onChange={passwordOnChange}/>
                <Button variant="primary" >Login</Button>
            </form>
        </div>
    );
}

export default Login;