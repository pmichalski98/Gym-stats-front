import Table from "./Table.jsx";
import {useState} from "react";
import {useUpdateTrainingsMutation} from "../store";

function EditableTable({training}) {

    const [data, setData] = useState(training);
    const [editRow, setEditRow] = useState(null);
    const [formData, setFormData] = useState({});

    const [updateTrainings] = useUpdateTrainingsMutation();

    function handleSavingTraining() {
        updateTrainings(data)
    }

    function handleEditFormChange(e) {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const updatedData = {...formData};
        if (fieldName === 'name') {
            updatedData[fieldName] = fieldValue;
        } else {
            updatedData[fieldName] = parseInt(fieldValue);
        }
        setFormData(updatedData)
    }

    function handleEdit(event, exercise, index) {
        event.preventDefault();
        setEditRow(index)
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

        const updatedExercises = data.exercises
            .map(exercise => exercise.id === formData.id
                ? {...exercise, ...formData} : {...exercise})

        const dataAfterEdit = {
            ...data,
            exercises: updatedExercises
        }

        setData(dataAfterEdit)
        setEditRow(null)
    }

    const config = [
        {
            label: '',
            render: (exercise, index) => index + 1
        },
        {
            label: 'Ćwiczenie',
            render: (exercise, index) => editRow === index ?
                <input type="text" name="name" value={formData.name}
                       onChange={(e) => handleEditFormChange(e)}/> : exercise.name
        },
        {
            label: 'Serie',
            render: (exercise, index) => editRow === index ?
                <input type="number" name="sets" value={formData.sets}
                       onChange={handleEditFormChange}/> : exercise.sets
        },
        {
            label: 'Powtorzenia',
            render: (exercise, index) => editRow === index ?
                <input type="number" name="reps" value={formData.reps}
                       onChange={handleEditFormChange}/> : exercise.reps
        },
        {
            label: 'Ciężar',
            render: (exercise, index) => editRow === index ?
                <input type="number" name="weight" value={formData.weight}
                       onChange={handleEditFormChange}/> : exercise.weight + ' kg'
        },
        {
            label: 'Actions',
            render: (exercise, index) =>
                index !== editRow ?
                    <button key={index} onClick={(event) => handleEdit(event, exercise, index)}
                            >Edit</button> :
                    <button key={index} type="submit" >Save</button>
        }

    ]

    return (
        <div className="container mx-auto ">
            <h1 className="text-center p-4 text-5xl">{training.name}</h1>
            <form onSubmit={handleSave}>
                <Table config={config} data={data.exercises}/>
            </form>
            <button onClick={handleSavingTraining}>Save training</button>
        </div>
    );
}

export default EditableTable;