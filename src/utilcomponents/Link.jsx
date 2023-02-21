import useNavigation from "../hooks/use-navigation.js";
import "../components/NavBar.modules.css"

function Link({to, children}) {
    const {navigate} = useNavigation();
    function handleClick(event) {
        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return (
        <a className="nav-link" href={to} onClick={handleClick}>{children}</a>
    )
}

export default Link;