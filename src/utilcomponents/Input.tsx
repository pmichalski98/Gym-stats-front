import React, {ChangeEvent} from 'react';
import classNames from "classnames";

interface Props {
    className: string;
    value: string;
    name: string;
    type: 'text' | 'number';
    placeholder?:string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({className, ...rest}: Props) {

    const classes = classNames(
        className,
        "text-white bg-black bg-opacity-0 w-full border rounded py-2 px-3 leading-tight text-center border-cyan ",
        "hover:border-lightWhite focus:border-lightWhite",
    )

    return (
        <input
            {...rest}
            className={classes}
        />
    );

}

export default Input;