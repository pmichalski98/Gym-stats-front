import { GoTrashcan } from "react-icons/go";
import { Exercise } from "../../types/training";

interface Props {
  exercises: Exercise[];
  onDelete?: (index: number) => void;
}
function ShowExercises({ exercises, onDelete }: Props) {
  return exercises.map((exercise, index) => (
    <p key={exercise.id} className="flex items-center gap-2">
      {index + 1} {exercise.name}
      {onDelete && (
        <GoTrashcan
          className="cursor-pointer"
          onClick={() => onDelete(index)}
        />
      )}
    </p>
  ));
}

export default ShowExercises;
