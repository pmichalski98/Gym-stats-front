import React from 'react';
import {GoTrashcan} from "react-icons/go";
import {Exercise} from "../../types/training";

interface Props {
    exercises:Exercise[];
    onDelete?: (index:number) => void
}

function ShowExercise({exercises, onDelete}:Props) {

    const renderedExercises = exercises.map((exercise, index) => {
        return (
            <p key={index} className="flex items-center gap-2">
                {index + 1} {exercise.name}
                {onDelete && <GoTrashcan className="cursor-pointer" onClick={() => onDelete(index)}/>}
            </p>
        );
    })

    return <>{renderedExercises}</>
}

export default ShowExercise;