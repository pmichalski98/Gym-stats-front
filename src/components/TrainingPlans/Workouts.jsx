import React, {useState} from 'react';
import Button from "../../utilcomponents/Button.tsx";
import TrainingList from "./TrainingList.jsx";
import AddingTraining from "./AddingTraining.js"

function Workouts() {
    const [buttonClicked, toggleWindow] = useState(false);

    let viewAfterClicking;
    let viewBeforeClicking = (
        <>
            <Button className="mx-auto m-10 text-2xl px-6 py-3" success rounded onClick={handleClick}>Dodaj plan treningowy</Button>
            <TrainingList/>
        </>
    );

    function handleClick() {
        toggleWindow(!buttonClicked);
    }

    if (buttonClicked) {
        viewAfterClicking = (
            <>
                <Button secondary pad onClick={handleClick}>Go back</Button>
                <AddingTraining toggleWindow={toggleWindow}/>
            </>
        );
    }

    return (
            <div className="w-3/4 mx-auto m-10 max-w-2xl">
                {viewAfterClicking || viewBeforeClicking}
            </div>
    )
}

export default Workouts;