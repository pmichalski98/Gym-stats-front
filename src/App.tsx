import MainPage from "./pages/Main/MainPage";
import {Route, Routes} from "react-router-dom";
import Workouts from "./pages/TrainingPlans/Workouts";
import Navbar from "./pages/Navbar";

function App() {
    return (
        <div className="bg-primary h-screen text-textWhite ">
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/plans" element={<Workouts/>}/>
            </Routes>
        </div>
    )
}

export default App
