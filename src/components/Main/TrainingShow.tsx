import TrainingTable from "./TrainingTable";
import React, {ChangeEvent, Fragment, SyntheticEvent, useState} from "react";
import {useUpdateTrainingsMutation} from "../../store";
import Button from "../../utilcomponents/Button";
import Input from "../../utilcomponents/Input";
import TrainingStartedPage from "./TrainingStartedPage";
import {Exercise, FormData, Training} from "../../types/training";

interface Props {
    training: Training;
    setChosen: (value: boolean) => void
}

function TrainingShow({training, setChosen}: Props) {
    const [chosenTraining, setChosenTraining] = useState(training);
    const [editRow, setEditRow] = useState<number | null>(null);
    const [formData, setFormData] = useState<FormData>({});
    const [startTraining, setStartTraining] = useState(false);

    const [updateTrainings] = useUpdateTrainingsMutation();

    function handleSavingTraining() {
        updateTrainings(chosenTraining);
    }

    function handleEditFormChange(event: ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) {
        event.preventDefault();

        const fieldValue = event.target.value;

        setFormData({
            ...formData,
            [fieldName]: fieldName === 'name' ? fieldValue : parseInt(fieldValue),
        });
    }

    function handleEdit(exercise: Exercise, index: number) {
        setEditRow(index);
        setFormData({...exercise})
    }

    function handleSave(event: SyntheticEvent) {
        event.preventDefault();

        const updatedExercises = chosenTraining.exercises.map((exercise: Exercise) =>
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

    function showInputOrLabel(index: number, name: keyof FormData, label: string | number | undefined, value: string | number | undefined) {
        return editRow === index ? (
            <Input
                type={typeof value === "number" ? "number" : "text"}
                name={name}
                value={value}
                onChange={(event) => handleEditFormChange(event,name)}
            />
        ) : (
            name === "weight" ? label + ' kg' : label
        );
    }

    function startTrainingClick() {
        setStartTraining(!startTraining)
    }

    const config = [
        {
            label: "",
            render: (exercise: Exercise, index: number) => index + 1,
        },
        {
            label: "Ćwiczenie",
            render: (exercise: Exercise, index: number) => showInputOrLabel(index, "name", exercise.name, formData.name),
        },
        {
            label: "Serie",
            render: (exercise: Exercise, index: number) => showInputOrLabel(index, "sets", exercise.sets, formData.sets),
        },
        {
            label: "Powtorzenia",
            render: (exercise: Exercise, index: number) => showInputOrLabel(index, "reps", exercise.reps, formData.reps),
        },
        {
            label: "Ciężar",
            render: (exercise: Exercise, index: number) => showInputOrLabel(index, "weight", exercise.weight, formData.weight)
        },
        {
            label: "Actions",
            render: (exercise: Exercise, index: number) =>
                index !== editRow ? (
                    <Button
                        variant="success"
                        rounded
                        key={index}
                        onClick={() => handleEdit(exercise, index)}
                    >
                        Edit
                    </Button>
                ) : (
                    <Button variant="primary" key={index} type="submit">
                        Save
                    </Button>
                ),
        },
    ];

    const contentBeforeTrainingStarted = (
        <Fragment>
            <div className="container mx-auto w-fit my-14 ">
                <Button variant="secondary" rounded onClick={() => setChosen(false)}>Go Back</Button>
                <h1 className="text-center p-4 text-5xl mb-10">{training.name}</h1>
                <form
                    className="text-center grid inline-grid grid-cols-6 gap-4 mx-auto container max-w-3xl"
                    onSubmit={handleSave}
                >
                    <TrainingTable config={config} data={chosenTraining.exercises}/>
                </form>
                <div className="flex place-content-end ">
                    <Button className="mt-10" variant="primary" rounded onClick={handleSavingTraining}>Save
                        training</Button>
                </div>
            </div>
            <Button onClick={startTrainingClick} variant="primary" className="text-6xl px-9 py-6 mx-auto rounded mt-10">
                START TRAINING
            </Button>
        </Fragment>
    );

    const contentAfterTrainingStarted = <TrainingStartedPage training={chosenTraining}/>

    return (
        <div className=" w-10/12 container mx-auto content-center grid gap-4 ">
            {startTraining ? contentAfterTrainingStarted : contentBeforeTrainingStarted}
        </div>
    );
}

export default TrainingShow;
