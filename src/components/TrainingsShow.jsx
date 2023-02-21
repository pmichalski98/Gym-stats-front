import React, {Fragment, useState} from 'react';
import EditableTable from "./EditableTable.jsx";

function TrainingsShow({trainings}) {

    const [chosen, setChosen] = useState(false);
    const [chosenTraining, setChosenTraining] = useState(undefined)

    let content;
    let afterChoosing = <EditableTable training={chosenTraining}/>
    function handleChoice(training) {
        setChosen(true)
        setChosenTraining(training)
    }

    let renderedTrainings = trainings.map((training, index) => {
        return (
            <li onClick={() => handleChoice(training)} key={index} className="flex gap-3">
                {training.name}
            </li>
        );
    })

    let beforeChoosing = (
        <div>
            <h1>Wybierz trening</h1>
            {renderedTrainings}
        </div>
    )

    if (chosen === false) {
        content = beforeChoosing
    } else {
        content = afterChoosing;
    }

    return (
        <Fragment>
         {content}
        </Fragment>
    );
}

export default TrainingsShow;