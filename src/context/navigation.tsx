import React, {createContext, ReactNode, useEffect, useState} from "react";
import {NavContext} from "../types/training";

const NavigationContext = createContext<NavContext>(undefined as unknown as NavContext);
function NavigationProvider({children}: { children : ReactNode }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate',handler);
        return () => {
            window.removeEventListener('popstate',handler);
        }
    }, [])

    const navigate = (to:string) => {
        window.history.pushState({}, '',to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export default NavigationContext;
export {NavigationProvider};