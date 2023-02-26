import React, {Fragment, useState} from "react";
import Button from "../../utilcomponents/Button.jsx";
import TrainingShow from "./TrainingShow.jsx";

function AllTrainingsShow({trainings}) {
    const [chosen, setChosen] = useState(false);
    const [chosenTraining, setChosenTraining] = useState(undefined);

    let content;
    let afterChoosing = (
        <div>
            <TrainingShow training={chosenTraining} setChosen={setChosen}/>
        </div>
    );

    function handleChoice(training) {
        setChosen(true);
        setChosenTraining(training);
    }

    let renderedTrainings = trainings.map((training, index) => {
        return (
            <Button
                onClick={() => handleChoice(training)}
                key={index}
                className="rounded font-bold text-5xl px-6 py-3 mx-auto"
                primary
            >
                {training.name}
            </Button>
        );
    });

    let beforeChoosing = (
        <div className="w-10/12 mx-auto text-center mt-6">
            <h1 className="text-4xl">Wybierz trening</h1>
            <div className="grid grid-cols-2 gap-10 my-20">
                {renderedTrainings}
            </div>
            <div className="border w-fit mx-auto p-4">
                Tutaj bedzie jakas historia treningow
            </div>
        </div>
    );

    if (chosen === false) {
        content = beforeChoosing;
    } else {
        content = afterChoosing;
    }

    // @TODO zrobic reusable input i dokonczyc stylowanie main page

    return <Fragment>{content}</Fragment>;
}

export default AllTrainingsShow;
