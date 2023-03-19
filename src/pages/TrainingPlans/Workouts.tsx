import { useState } from "react";
import Button from "../../components/Button";
import TrainingList from "./TrainingList";
import AddingTraining from "./AddingTraining";

function Workouts() {
  const [addTrainingBtnClicked, setAddTrainingBtnClicked] = useState(false);

  function handleClick() {
    setAddTrainingBtnClicked(!addTrainingBtnClicked);
  }
  return (
    <div className="w-3/4 mx-auto m-10 max-w-2xl">
      {!addTrainingBtnClicked ? (
        <>
          <Button
            className="mx-auto m-10 text-2xl px-6 py-3"
            onClick={handleClick}
            variant="primary"
          >
            Dodaj plan treningowy
          </Button>
          <TrainingList />
        </>
      ) : (
        <>
          <Button variant="secondary" onClick={handleClick}>
            Go back
          </Button>
          <AddingTraining goBackBtn={setAddTrainingBtnClicked} />
        </>
      )}
    </div>
  );
}

export default Workouts;
