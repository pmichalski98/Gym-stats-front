import {NavLink, useNavigate} from "react-router-dom";
import Button from "../components/Button";
import {useAuth} from "../contexts/AuthContext";
import {useSignoutMutation} from "../store";

function Navbar() {

    const links = [
        {label: 'Stats', path: '/stats'},
        {label: 'Plany', path: '/plans'},
        {label: 'Start', path: '/'},
        {label: 'Pomiary', path: '/body'},
    ];
    const { currentUser, setCurrentUser } = useAuth();
    const [signout] = useSignoutMutation();
    const navigate = useNavigate();

    const notActive = "text-xl hover:text-cyan focus:outline-cyan outline-none rounded p-1 mb-1"
    const active = `font-bold border-l-4 border-cyan pl-2 text-cyan ${notActive} `

    let renderedLinks = links.map(link =>
        <NavLink to={link.path} key={link.label}
                 className={({isActive}) => isActive ? active : notActive}>
            {link.label}
        </NavLink>)

    const handleLogout = async () => {
        await signout();
        setCurrentUser(undefined);
        navigate('/signin')
    }
    return (
        <nav className="flex justify-center justify-around border-b-4 border-cyan pt-3 ">
            <>
                {renderedLinks}
                <Button disabled={currentUser === undefined} onClick={handleLogout} variant="primary">Logout</Button>
            </>
        </nav>
    );
}

export default Navbar;