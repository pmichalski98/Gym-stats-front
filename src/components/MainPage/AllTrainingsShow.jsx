import React, {Fragment, useState} from 'react';
import TrainingShow from "./TrainingShow.jsx";
import Button from "../../utilcomponents/Button.jsx";

function AllTrainingsShow({trainings}) {

    const [chosen, setChosen] = useState(false);
    const [chosenTraining, setChosenTraining] = useState(undefined)

    let content;
    let afterChoosing = (
        <div>
            <TrainingShow training={chosenTraining}/>
        </div>
    );

    function handleChoice(training) {
        setChosen(true)
        setChosenTraining(training)
    }

    let renderedTrainings = trainings.map((training, index) => {
        return (
            <Button
                onClick={() => handleChoice(training)}
                key={index}
                className="rounded font-bold text-5xl px-6 py-3"
                primary
            >
                {training.name}
            </Button>
        );
    })

    let beforeChoosing = (
        <div className="w-10/12 mx-auto text-center mt-6">
            <h1 className="text-4xl">Wybierz trening</h1>
            <div className="flex justify-around mt-10">
                {renderedTrainings}
            </div>
        </div>
    )

    if (chosen === false) {
        content = beforeChoosing
    } else {
        content = afterChoosing;
    }

    // @TODO zrobic reusable input i dokonczyc stylowanie main page

    return (
        <Fragment>
            {content}
        </Fragment>
    );
}

export default AllTrainingsShow;