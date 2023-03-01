import useNavigation from "../hooks/use-navigation";
import React from "react";

type Props = {
    path:string,
    children:React.ReactNode
}
function Route({path, children}:Props) {

    const {currentPath} = useNavigation()

    if (currentPath === path) {
        return {children}
    }
    return null
}

export default Route;