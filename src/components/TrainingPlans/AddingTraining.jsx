import Button from "../../utilComponents/Button";
import {useState} from "react";
import {useAddTrainingMutation} from "../../store";
import Input from "../../utilComponents/Input";
import ShowExercise from "./ShowExercise.jsx";

function AddingTraining({toggleWindow}) {
    const [exercises, setExercises] = useState([]);
    const [exerciseValue, setExerciseValue] = useState('');
    const [trainingName, setTrainingName] = useState('');

    const [addTraining] = useAddTrainingMutation();

    function handleSubmit(event) {
        event.preventDefault();
        const training = {
            name: trainingName,
            exercises: exercises,
        }
        addTraining(training);
        toggleWindow(false)
    }

    function handleExerciseOnChange(event) {
        setExerciseValue(event.target.value);
    }

    function handleTrainingNameChange(event) {
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

    function handleExerciseDelete(index) {
        const exercisesAfterDelete = [...exercises];

        exercisesAfterDelete.splice(index, 1)
        setExercises(exercisesAfterDelete);
    }

    const saveTrainingBtn = exercises.length > 0 &&
        <Button onClick={handleSubmit} success pad rounded className="mt-4 mx-auto">Zapisz trening</Button>

    const addExerciseBtn = <Button onClick={handleAddingExercise} className="mx-auto mt-4" primary pad roundedFull>Dodaj
        cwiczenie</Button>

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