import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import PrivateRoutes from "./pages/Auth/PrivateRoutes";
import Workouts from "./pages/TrainingPlans/Workouts";
import MainPage from "./pages/Main/MainPage";
import Navbar from "./pages/Navbar";
import Stats from "./pages/Stats/Stats";
import Body from "./pages/Body/Body";

function App() {
  return (
    <div className="bg-primary h-screen text-textWhite ">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route element={<MainPage />} path="/" />
          <Route element={<Workouts />} path="/plans" />
          <Route element={<Stats />} path="/stats" />
          <Route element={<Body />} path="/body" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
