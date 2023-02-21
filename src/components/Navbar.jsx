import Link from "../utilComponents/Link";
import "./NavBar.modules.css"

function Navbar() {
    const links = [
        {label: 'Stats', path: '/statystyki'},
        {label: 'Plany', path: '/plan-treningowy'},
        {label: 'Start', path: '/'},
        {label: 'Pomiary', path: '/pomiary'},
        {label: 'Login', path: '/google'},
    ];

    const renderedLinks = links.map((link) => {

        return (
            <Link
                to={link.path}
                key={link.label}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <>
            <nav className="nav">
                <div className="container">
                    {renderedLinks}
                </div>
            </nav>
        </>
    );
}

export default Navbar;