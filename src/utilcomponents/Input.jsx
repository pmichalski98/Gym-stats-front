import React from 'react';
import classNames from "classnames";

function Input({value, onChange,name, type, ...rest}) {

    const classes = classNames(
        rest.className,
        "text-white bg-black bg-opacity-0 w-full shadow border rounded py-2 px-3 leading-tight text-center my-custom-style"
    )

    return (
        <input
            {...rest} name={name} value={value} onChange={onChange} type={type}
            className={classes}/>
    );

}
export default Input;


Input.propTypes = {
    checkIfPropsRepeated: ({primary, secondary}) => {
        const count =
            Number(primary)
            + Number(!!secondary);

        if (count > 1) {
            return new Error('Only one of primary,secondary, success, warning, danger can be true');
        }
    }
}