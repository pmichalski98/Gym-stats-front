import TrainingTable from "./TrainingTable";
import React, {ChangeEvent, Fragment, useState} from "react";
import {useUpdateTrainingsMutation} from "../../store";
import Button from "../../utilcomponents/Button";
import Input from "../../utilcomponents/Input";
import TrainingStartedPage from "./TrainingStartedPage";
import {Exercise, Training} from "../../types/training";

interface Props {
    training: Training;
    setChosen: (value: boolean) => void
}

function TrainingShow({training, setChosen}: Props) {
    const [chosenTraining, setChosenTraining] = useState(training);
    const [editRow, setEditRow] = useState<number | null>(null);
    const [formData, setFormData] = useState<Exercise | null>(null);
    const [startTraining, setStartTraining] = useState(false);

    const [updateTrainings] = useUpdateTrainingsMutation();

    function handleSavingTraining() {
        updateTrainings(chosenTraining);
    }

    function handleEditFormChange(event: ChangeEvent<HTMLInputElement>, fieldName:string) {
        event.preventDefault();

        const fieldValue = event.target.value;

        const updatedData = {...formData};

        updatedData[fieldName] = fieldName === 'name' ? fieldValue : parseInt(fieldValue);
        setFormData(updatedData);
    }

    function handleEdit(event: Event, exercise: Exercise, index: number) {
        event.preventDefault();
        setEditRow(index);
        const defaultValues: Exercise = {
            id: exercise.id,
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
        }
        setFormData(defaultValues)
    }

    function handleSave(event: Event) {
        event.preventDefault();

        if (chosenTraining) {
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
    }

    function showInputOrLabel(index: number, name: string, label: string | number | undefined, value: string | number | undefined) {
        return editRow === index ? (
            <Input
                type={typeof value === "number" ? "number" : "text"}
                name={name}
                value={value}
                onChange={handleEditFormChange}
            />
        ) : (
            name === "weight" ? label + ' kg' : label
        );
    }

    function startTrainingClick() {
        setStartTraining(!startTraining)
    }

    //@TODO Keep refactoring to typescript. Need to change Input/Button components
    // @ts-ignore
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
                    // @ts-ignore
                    <Button
                        success
                        pad
                        rounded
                        key={index}
                        onClick={(event: Event) => handleEdit(event, exercise, index)}
                    >
                        Edit
                    </Button>
                ) : (
                    // @ts-ignore
                    <Button success pad rounded key={index} type="submit">
                        Save
                    </Button>
                ),
        },
    ];

    const contentBeforeTrainingStarted = (
        <Fragment>
            <div className="container mx-auto w-fit my-14 ">
                <Button secondary rounded pad onClick={() => setChosen(false)}>Go Back</Button>
                <h1 className="text-center p-4 text-5xl mb-10">{training.name}</h1>
                <form
                    className="text-center grid inline-grid grid-cols-6 gap-4 mx-auto container max-w-3xl"
                    onSubmit={handleSave}
                >
                    <TrainingTable config={config} data={chosenTraining.exercises}/>
                </form>
                <div className="flex place-content-end ">
                    <Button className="mt-10" primary pad rounded onClick={handleSavingTraining}>Save training</Button>
                </div>
            </div>
            <Button onClick={startTrainingClick} primary className="text-6xl px-9 py-6 mx-auto rounded mt-10">
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
