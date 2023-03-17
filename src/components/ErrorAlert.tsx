import React from 'react';

interface Props {
    message: string
}
function ErrorAlert({message}:Props) {
    return (
        <div className="bg-red-400 w-full p-4 rounded font-bold ">
            {message}
        </div>
    );
}

export default ErrorAlert;