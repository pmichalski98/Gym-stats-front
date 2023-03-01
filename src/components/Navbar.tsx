import Link from "../utilcomponents/Link";

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
                className="text-xl hover:text-cyan focus:outline-cyan outline-none rounded p-1 mb-1"
                activeClassName="font-bold border-l-4 border-cyan pl-2 text-cyan"
            >
                {link.label}
            </Link>
        );
    });

    return (
        <nav className="flex justify-center justify-around border-b-4 border-cyan pt-3 ">
            {renderedLinks}
        </nav>
    );
}

export default Navbar;