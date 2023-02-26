import Route from "./utilcomponents/Route.jsx";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/Main/MainPage.jsx";
import Workouts from "./components/TrainingPlans/Workouts.jsx";
import GoogleAuth from "./components/GoogleAuth.jsx";


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
