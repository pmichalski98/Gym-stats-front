import React from 'react';
import "./Exercises.modules.css"

function TrainingRow({exercise, setEditRow, index}) {

    function handleClick() {
        setEditRow(index)
    }

    return (
        <ul className="exercises">
            <li>
                <p>{exercise.name}</p>
            </li>
            <li>
                <p>{exercise.sets}</p>
            </li>
            <li>
                <p>{exercise.reps}</p>
            </li>
            <li>
                <p>{exercise.weight}</p>
            </li>
            <li>
                <button onClick={handleClick}>Edit</button>
            </li>
        </ul>
    );
}

export default TrainingRow;