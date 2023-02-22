import Route from "./utilcomponents/Route.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Workouts from "./components/TrainingPlans/Workouts.jsx";


function App() {

    return (
        <div className="bg-backgroundBlue h-screen text-textWhite ">
            <Navbar className="navbar"/>
            <Route path='/'>
                <MainPage/>
            </Route>
            <Route path='/plan-treningowy'>
                <Workouts/>
            </Route>
        </div>
    )
}

export default App
