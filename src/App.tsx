import MainPage from "./pages/Main/MainPage";
import {Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar";
import React from "react";
import Workouts from "./pages/TrainingPlans/Workouts";
import Login from "./pages/Login";
import {RequireAuth} from "react-auth-kit";

function App() {
    return (
        <div className="bg-primary h-screen text-textWhite ">
            <Navbar/>
            <Routes>
                <Route path="/secure" element={
                    <RequireAuth loginPath={'/'}>
                        <MainPage/>
                    </RequireAuth>
                }/>
                <Route path='/' element={<Login/>}/>
                <Route path="/plans" element={<Workouts/>}/>
            </Routes>
        </div>
    )
}

export default App
