import React, {ChangeEvent, useState} from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import ErrorAlert from "../../components/ErrorAlert";

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const {setCurrentUser} = useAuth();
    const navigate = useNavigate();

    function emailOnChange(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function passwordOnChange(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function passwordConfirmOnChange(event: ChangeEvent<HTMLInputElement>) {
        setPasswordConfirm(event.target.value);
    }

    async function handleFormSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (password !== passwordConfirm) {
            return setErrorMsg('Passwords do not match !')
        }
        try {
            setErrorMsg("")
            setLoading(true)
            const res = await signup({email, password})
            console.log(res)
                // setCurrentUser({email: data.email, id: data.id});
            navigate('/signin');
        } catch {
            setErrorMsg('Failed to create an account')
        }
        setLoading(false)
    }


    return (
        <div className="text-center pt-10">
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 inline-grid gap-4">
                <h2 className="text-3xl">Create an account</h2>
                <div className="container w-2/3 mx-auto ">
                    {errorMsg && <ErrorAlert message={errorMsg}/>}
                    <Input type="email" placeholder="Email" value={email} onChange={emailOnChange}/>
                    <Input type="password" placeholder="Password" value={password} onChange={passwordOnChange}/>
                    <Input type="password" placeholder="Confirm password" value={passwordConfirm}
                           onChange={passwordConfirmOnChange}/>
                    <Button type="submit" variant="primary" disabled={loading}>Sign Up</Button>
                    <p>Already have an account ? <Link to='/signin'>Log In</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Signup;