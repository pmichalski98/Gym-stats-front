import React from 'react';

function EditableRow({exercise, setEditRow}) {

    function handleClick() {
        setEditRow(null)
    }

    Object.entries(exercise).map(row => {
        console.log(row[1]);
    })


    return (
        <ul className="exercises">
            <li >
                <input type="text" value={exercise.name}/>
            </li>
            <li>
                <input type="number" value={exercise.sets}/>
            </li>
            <li>
                <input type="number" value={exercise.reps}/>
            </li>
            <li>
                <input type="number" value={exercise.weight}/>
            </li>
            <li>
                <button onClick={handleClick}>Save</button>
            </li>
        </ul>
    );
}

export default EditableRow;