import React, {useState} from 'react';
import TrainingRow from "./TrainingRow.jsx";
import EditableRow from "./EditableRow.jsx";
import "./Exercises.modules.css"
import {retry} from "@reduxjs/toolkit/query";

const labels = ["Ćwiczenie", "Serie", "Powtórzenia", "Ciężar", "Actions"]

function TrainingStartPage({training}) {

    const [data, setData] = useState(training);
    const [editRow, setEditRow] = useState(null);


    const renderedExercises = data.exercises.map(
        (exercise, index) => editRow !== index ?
            <TrainingRow key={exercise.id} exercise={exercise} setEditRow={setEditRow} index={index}/> :
            <EditableRow key={exercise.id} exercise={exercise} setEditRow={setEditRow}/>)

    const renderedLabels = labels.map((label, index) => <li key={index}><p>{label}</p></li>)

    // @TODO Pomyslec nad zrobieniem edytowalnosci
    // const config = [
    //     {
    //         label: '',
    //         render: (exercise, index) => index + 1,
    //     },
    //     {
    //         label: 'Ćwiczenie',
    //         render: () => 1
    //     },
    //     {
    //         label: 'Serie',
    //         render: () => 1
    //     },
    //     {
    //         label: 'Powtórzenia',
    //         render: () => 1
    //     },
    //     {
    //         label: 'Ciężar',
    //         render: () => 1
    //     },
    //     {
    //         label: 'Actions',
    //         render: () => 1
    //     },
    // ]

    return (
        <div className="container table">
            <h1 className="exercises-title">{data.name}</h1>
            <form>
                <ul className="exercises">
                    {renderedLabels}
                </ul>
                {renderedExercises}
            </form>
        </div>
    );
}

export default TrainingStartPage;