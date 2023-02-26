import React from 'react';
import {GoTrashcan} from "react-icons/go";

function ShowExercise({exercises, onDelete}) {

    return exercises.map((exercise, index) => {
        return (
            <p key={index} className="flex items-center gap-2">
                {index + 1} {exercise.name}
                {onDelete && <GoTrashcan onClick={() => onDelete(index)}/>}
            </p>
        );
    })
}

export default ShowExercise;