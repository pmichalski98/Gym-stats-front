import classNames from "classnames";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    variant: "primary" | "secondary" | "success";
    outlined: boolean;
    rounded: boolean;
    className: string;
}

function Button({children, outlined, rounded, className,variant, ...rest}: Props) {

    const classes = classNames(
        'flex items-center text-white',
        'shadow-2xl text-backgroundBlue ',
        'hover:text-lightWhite focus:outline-cyan outline-none px-3 py-1.5 rounded',
        {
            'border-cyan bg-gradient-to-r from-blue-500 to-cyan': variant === "primary",
            'border-2 border-cyan bg-backgroundBlue text-white': variant === "secondary",
            'border-cyan bg-darkerCyan text-black': variant === "success",
            'border-2': outlined,
            'rounded-full': rounded,
        }
        , className);

    return <button {...rest} className={classes}>{children}</button>
}

export default Button;