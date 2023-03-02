import Route from "./utilcomponents/Route";
import Navbar from "./components/Navbar";
import MainPage from "./components/Main/MainPage";
import Workouts from "./components/TrainingPlans/Workouts";
import GoogleAuth from "./components/GoogleAuth";

function App() {
    return (
        <div className="bg-backgroundBlue h-screen text-textWhite ">
            <Navbar/>
            <Route path='/'>
                <MainPage/>
            </Route>
            <Route path='/plan-treningowy'>
                <Workouts/>
            </Route>
            <Route path='/google'>
                <GoogleAuth/>
            </Route>
        </div>
    )
}

export default App
