import MainPage from "./components/Main/MainPage";
import {Route, Routes} from "react-router-dom";
import Workouts from "./components/TrainingPlans/Workouts";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="bg-backgroundBlue h-screen text-textWhite ">
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/plans" element={<Workouts/>}/>
            </Routes>
        </div>
    )
}

export default App
