import React from 'react';
import {GoTrashcan} from "react-icons/go";
import {Exercise, Exercises} from "../../types/training";

interface Props {
    exercises:Exercises;
    onDelete?: (index:number) => void
}

function ShowExercise({exercises, onDelete}:Props) {

    // @ts-ignore
    return exercises.map((exercise:Exercise, index:number) => {
        return (
            <p key={index} className="flex items-center gap-2">
                {index + 1} {exercise.name}
                {onDelete && <GoTrashcan className="cursor-pointer" onClick={() => onDelete(index)}/>}
            </p>
        );
    })
}

export default ShowExercise;