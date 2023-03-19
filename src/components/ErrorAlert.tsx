import React from "react";
import classNames from "classnames";

interface Props {
  message: string;
  className: string;
}
function ErrorAlert({ message, className }: Props) {
  const classes = classNames(
    "bg-red-400 p-4 rounded font-bold mx-auto text-center",
    className
  );
  return <div className={classes}>{message}</div>;
}

export default ErrorAlert;
