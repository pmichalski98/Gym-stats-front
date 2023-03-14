import {NavLink} from "react-router-dom";

function Navbar() {
    const links = [
        {label: 'Stats', path: '/stats'},
        {label: 'Plany', path: '/plans'},
        {label: 'Start', path: '/'},
        {label: 'Pomiary', path: '/body'},
        {label: 'Login', path: '/login'},
    ];

    const notActive = "text-xl hover:text-cyan focus:outline-cyan outline-none rounded p-1 mb-1"
    const active = `font-bold border-l-4 border-cyan pl-2 text-cyan ${notActive} `

    return (
        <nav className="flex justify-center justify-around border-b-4 border-cyan pt-3 ">
            {
                links.map(link =>
                    <NavLink to={link.path} key={link.label}
                             className={({isActive}) => isActive ? active : notActive}>
                        {link.label}
                    </NavLink>)
            }
        </nav>
    );
}

export default Navbar;