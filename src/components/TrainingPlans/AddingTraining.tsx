import Button from "../../utilcomponents/Button";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAddTrainingMutation} from "../../store";
import Input from "../../utilcomponents/Input";
import ShowExercise from "./ShowExercise";
import {Exercise} from "../../types/training";

interface Props {
    toggleWindow: (value: boolean) => void
}

function AddingTraining({toggleWindow}: Props) {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [exerciseValue, setExerciseValue] = useState('');
    const [trainingName, setTrainingName] = useState('');

    const [addTraining] = useAddTrainingMutation();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        addTraining({
            name: trainingName,
            exercises: exercises,
        });
        toggleWindow(false)
    }

    function handleExerciseOnChange(event: ChangeEvent<HTMLInputElement>) {
        setExerciseValue(event.target.value);
    }

    function handleTrainingNameChange(event: ChangeEvent<HTMLInputElement>) {
        setTrainingName(event.target.value);
    }

    function handleAddingExercise() {
        setExercises([
                ...exercises,
                {
                    name: exerciseValue,
                }
            ]
        );
        setExerciseValue('');
    }

    function handleExerciseDelete(index:number) {
        const exercisesAfterDelete = [...exercises];

        exercisesAfterDelete.splice(index, 1)
        setExercises(exercisesAfterDelete);
    }

    const saveTrainingBtn = exercises.length > 0 && <Button type="submit" variant="success" rounded className="mt-4 mx-auto">Zapisz trening</Button>

    const addExerciseBtn = <Button onClick={handleAddingExercise} className="mx-auto mt-4" variant="primary" rounded>Dodaj cwiczenie</Button>

    // @ts-ignore
    const renderedExercises = <ShowExercise exercises={exercises} onDelete={handleExerciseDelete}/>

    const trainingNameInput =
        <Input
            className="text-3xl max-w-fit my-2"
            onChange={handleTrainingNameChange}
            type="text"
            value={trainingName}
            placeholder="Nazwa treningu"
        />

    const exerciseInput =
        <Input
            className="max-w-xs my-2 mt-4"
            onChange={handleExerciseOnChange}
            type="text"
            value={exerciseValue}
            placeholder="Nazwa cwiczenia"
        />

    const trainingForm =
        <form className="mt-10 p-4 border rounded " onSubmit={handleSubmit}>
            {renderedExercises}
            {saveTrainingBtn}
        </form>

    return (
        <>
            <div className="mx-auto mt-6 p-4 text-center">
                {trainingNameInput}
                {exerciseInput}
                {addExerciseBtn}
                {exercises.length > 0 && trainingForm }
            </div>
        </>
    );
}

export default AddingTraining;