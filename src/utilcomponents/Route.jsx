import useNavigation from "../hooks/use-navigation.js";

function Route({path, children}) {

    const {currentPath} = useNavigation()

    if (currentPath === path) {
        return children;
    }

    return null;
}

export default Route;