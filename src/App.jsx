import './App.css'
import Route from "./utilcomponents/Route.jsx";
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";
import Workouts from "./components/Workouts.jsx";

function App() {

    return (
        <>
            <Navbar className="navbar"/>
            <Route path='/'>
                <MainPage/>
            </Route>
            <Route path='/plan-treningowy'>
                <Workouts/>
            </Route>
        </>
    )
}

export default App
