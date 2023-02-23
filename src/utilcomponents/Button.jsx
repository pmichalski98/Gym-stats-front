import classNames from "classnames";
function Button({children,primary,secondary,success,warning,outline,pad,rounded,roundedFull,  ...rest}) {

    const classes = classNames(
        rest.className,
        'flex items-center text-white' +
        'shadow-2xl text-backgroundBlue ' +
        'hover:text-lightWhite focus:outline-cyan outline-none',
        {
            'border-cyan bg-gradient-to-r from-blue-500 to-cyan' : primary,
            'border-2 border-cyan bg-backgroundBlue text-white' : secondary,
            'border-cyan bg-darkerCyan text-black' : success,
            'px-3 py-1.5' : pad,
            'border-2' : outline,
            'rounded-full' : roundedFull,
            'rounded' : rounded,
        });

    return <button {...rest} className={classes}>{children}</button>
}

export default Button;

Button.propTypes = {
    checkIfPropsRepeated: ({primary, secondary, success}) => {
        const count =
            Number(primary)
            + Number(!!secondary)
            + Number(!!success);

        if (count > 1) {
            return new Error('Only one of primary,secondary, success, warning, danger can be true');
        }
    }
}