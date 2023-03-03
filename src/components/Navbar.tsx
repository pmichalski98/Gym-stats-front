import {NavLink} from "react-router-dom";

function Navbar() {
    const links = [
        {label: 'Stats', path: '/statystyki'},
        {label: 'Plany', path: '/plans'},
        {label: 'Start', path: '/'},
        {label: 'Pomiary', path: '/pomiary'},
        {label: 'Login', path: '/google'},
    ];

    const active =  "text-xl text-red-500 hover:text-cyan focus:outline-cyan outline-none rounded p-1 mb-1"
    const notActive = "text-xl hover:text-cyan focus:outline-cyan outline-none rounded p-1 mb-1"

    const renderedLinks = links.map((link) => {
        return (
            <NavLink
                to={link.path}
                key={link.label}
                className={({isActive}) => isActive ? active : notActive }
            >
                {link.label}
            </NavLink>
        );
    });

    return (
        <nav className="flex justify-center justify-around border-b-4 border-cyan pt-3 ">
            {renderedLinks}
        </nav>
    );
}

export default Navbar;