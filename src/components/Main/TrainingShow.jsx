import TrainingTable from "./TrainingTable.jsx";
import React, {useState} from "react";
import {useUpdateTrainingsMutation} from "../../store/index.js";
import Button from "../../utilcomponents/Button.jsx";
import Input from "../../utilcomponents/Input.jsx";

function TrainingShow({training, setChosen}) {
    const [chosenTraining, setChosenTraining] = useState(training);
    const [editRow, setEditRow] = useState(null);
    const [formData, setFormData] = useState({});

    const [updateTrainings] = useUpdateTrainingsMutation();

    function handleSavingTraining() {
        updateTrainings(chosenTraining);
    }

    function handleEditFormChange(e) {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const updatedData = {...formData};
        updatedData[fieldName] = fieldName === 'name' ? fieldValue : parseInt(fieldValue);
        setFormData(updatedData);
    }

    function handleEdit(event, exercise, index) {
        event.preventDefault();
        setEditRow(index);
        const defaultValues = {
            id: exercise.id,
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
        }
        setFormData(defaultValues)
    }

    function handleSave(event) {
        event.preventDefault();

        const updatedExercises = chosenTraining.exercises.map((exercise) =>
            exercise.id === formData.id
                ? {...exercise, ...formData}
                : {...exercise}
        );

        const trainingAfterEdit = {
            ...chosenTraining,
            exercises: updatedExercises,
        };

        setChosenTraining(trainingAfterEdit);
        setEditRow(null);
    }

    function showInputOrLabel(index, name, label, value) {
        return editRow === index ? (
            <Input
                type={typeof value === "number" ? "number" : "text"}
                name={name}
                value={value}
                onChange={(e) => handleEditFormChange(e)}
            />
        ) : (
            name === "weight" ?  label + ' kg' : label
        );
    }

    const config = [
        {
            label: "",
            render: (exercise, index) => index + 1,
        },
        {
            label: "Ćwiczenie",
            render: (exercise, index) => showInputOrLabel(index,"name", exercise.name, formData.name),
        },
        {
            label: "Serie",
            render: (exercise, index) => showInputOrLabel(index,"sets", exercise.sets, formData.sets),
        },
        {
            label: "Powtorzenia",
            render: (exercise, index) => showInputOrLabel(index,"reps", exercise.reps, formData.reps),
        },
        {
            label: "Ciężar",
            render: (exercise, index) => showInputOrLabel(index,"weight", exercise.weight, formData.weight)
        },
        {
            label: "Actions",
            render: (exercise, index) =>
                index !== editRow ? (
                    <Button
                        success
                        pad
                        rounded
                        key={index}
                        onClick={(event) => handleEdit(event, exercise, index)}
                    >
                        Edit
                    </Button>
                ) : (
                    <Button success pad rounded key={index} type="submit">
                        Save
                    </Button>
                ),
        },
    ];

    return (
        <div className=" w-10/12 container mx-auto content-center grid gap-4 ">
            <h1 className="text-center p-4 text-5xl">{training.name}</h1>
            <form
                className="text-center grid inline-grid grid-cols-6 gap-4 mx-auto container max-w-3xl"
                onSubmit={handleSave}
            >
                <TrainingTable config={config} data={chosenTraining.exercises}/>
            </form>
            <div className="flex justify-around ">
                <Button primary pad rounded onClick={handleSavingTraining}>
                    Save training
                </Button>
                <Button secondary roundedFull pad onClick={() => setChosen(false)}>
                    Go back
                </Button>
            </div>
        </div>
    );
}

export default TrainingShow;
