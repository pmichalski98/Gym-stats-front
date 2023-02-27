import React from 'react';

function CountDownPage({counter}) {

    return (
        <div className=" mx-auto">
            <h1 className="text-6xl my-24">{`Training starts in ...`}</h1>
            <h1 className="text-6xl text-center">{counter}</h1>
        </div>
    );
}

export default CountDownPage;