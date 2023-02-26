import React, {useState} from 'react';
import Button from "../../utilcomponents/Button.jsx";
import TrainingList from "./TrainingList.jsx";
import AddingTraining from "./AddingTraining"

function Workouts() {
    const [buttonClicked, setButtonClicked] = useState(false);

    let viewAfterClicking;
    let viewBeforeClicking = (
        <>
            <Button className="mx-auto m-10 text-2xl px-6 py-3" success rounded onClick={handleClick}>Dodaj plan treningowy</Button>
            <TrainingList/>
        </>
    );

    function handleClick() {
        setButtonClicked(!buttonClicked);
    }

    if (buttonClicked) {
        viewAfterClicking = (
            <>
                <Button secondary pad onClick={handleClick}>Go back</Button>
                <AddingTraining toggleWindow={setButtonClicked}/>
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