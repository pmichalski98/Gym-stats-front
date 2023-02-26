import {useState} from "react";
import {GoChevronDown, GoChevronLeft, GoTrashcan} from "react-icons/go";
import {useDeleteTrainingMutation} from "../../store";
import ShowExercise from "./ShowExercise.jsx";

function Accordion({trainings}) {

    const [deleteTraining] = useDeleteTrainingMutation();
    const [expandedIndex, setExpandedIndex] = useState(NaN);
    function handleDelete(training) {
        deleteTraining(training);
    }
    const handleClick = (index) => {
        index === expandedIndex ? setExpandedIndex(NaN) : setExpandedIndex(index)
    }

    const renderedTrainings = trainings.map((training, index) => {

        const isExpanded = index === expandedIndex;

        const content = isExpanded && <div className=" border-b p-5"><ShowExercise exercises={training.exercises}/></div>

        const expandIcon = <span>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return (
            <div key={training.id}>
                <div
                    className=" flex justify-between p-3 border-b items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    <GoTrashcan onClick={() => handleDelete(training)}/>
                    {training.name}
                    {expandIcon}
                </div>
                {content}
            </div>
        );
    })

    return (
        <div className="border-x border-t rounded border-lightWhite ">
            {renderedTrainings}
        </div>
    );
}

export default Accordion;