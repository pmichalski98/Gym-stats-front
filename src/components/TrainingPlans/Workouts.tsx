import React, {useState} from 'react';
import Button from "../../utilcomponents/Button";
import TrainingList from "./TrainingList";
import AddingTraining from "./AddingTraining"

function Workouts() {
    const [buttonClicked, toggleWindow] = useState(false);

    let viewAfterClicking;
    let viewBeforeClicking = (
        <>
            <Button className="mx-auto m-10 text-2xl px-6 py-3" onClick={handleClick} variant="primary">Dodaj plan treningowy</Button>
            <TrainingList/>
        </>
    );

    function handleClick() {
        toggleWindow(!buttonClicked);
    }

    if (buttonClicked) {
        viewAfterClicking = (
            <>
                <Button variant="secondary" onClick={handleClick}>Go back</Button>
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