import useNavigation from "../hooks/use-navigation";
import classNames from "classnames"
import React, {ReactNode} from "react";

type Props = {
    to: string;
    children: ReactNode;
    className: string;
    activeClassName: string;
}

function Link({to, children, className, activeClassName}: Props) {

    const {navigate, currentPath} = useNavigation();

    let classes = classNames(
        className,
        currentPath === to && activeClassName
    )

    function handleClick(event: KeyboardEvent) {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <a className={classes} href={to} onClick={() => handleClick}><>{children}</>
        </a>
    )
}

export default Link;