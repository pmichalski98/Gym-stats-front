import useNavigation from "../hooks/use-navigation.js";
import classNames from "classnames"

function Link({to, children, className, activeClassName}) {
    const {navigate, currentPath} = useNavigation();

    let classes = classNames(
        className,
        currentPath === to && activeClassName
    )
    function handleClick(event) {
        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    }
    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    )
}
export default Link;