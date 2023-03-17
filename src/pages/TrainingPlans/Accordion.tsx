import {useState} from "react";
import {GoChevronDown, GoChevronLeft, GoTrashcan} from "react-icons/go";
import {useDeleteTrainingMutation} from "../../store";
import ShowExercises from "./ShowExercises";
import {Training} from "../../types/training";

interface Props {
    trainings: Training[];
}

function Accordion({trainings}: Props) {

    const [deleteTraining] = useDeleteTrainingMutation();
    const [expandedIndex, setExpandedIndex] = useState(NaN);
    function handleDelete(training: Training) {
        deleteTraining(training);
    }
    const handleExpandClick = (index:number) => {
        index === expandedIndex ? setExpandedIndex(NaN) : setExpandedIndex(index)
    }

    const renderedTrainings = trainings.map((training, index) => {

        const isExpanded = index === expandedIndex;

        const content = index === expandedIndex && <div className=" border-b p-5"><ShowExercises exercises={training.exercises}/></div>

        const expandIcon = <span>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return (
            <div key={training.id}>
                <div
                    className=" flex justify-between p-3 border-b items-center cursor-pointer"
                    onClick={() => handleExpandClick(index)}
                >
                    <GoTrashcan onClick={() => handleDelete(training)}/>
                    {training.title}
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