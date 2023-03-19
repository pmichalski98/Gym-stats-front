import { useState } from "react";
import Button from "../../components/Button";
import ChosenTrainingShow from "./ChosenTrainingShow";
import { Training } from "../../types/training";

interface TrainingsProps {
  trainings: Training[];
}

function AllTrainingsShow({ trainings }: TrainingsProps) {
  const [chosen, setChosen] = useState(false);
  const [chosenTraining, setChosenTraining] = useState<Training>(
    {} as Training
  );

  function handleChoice(training: Training): void {
    setChosen(true);
    setChosenTraining(training);
  }

  const renderedTrainings: JSX.Element[] = trainings.map((training) => (
    <Button
      onClick={() => handleChoice(training)}
      key={training.id}
      className="rounded font-bold text-5xl px-6 py-3 mx-auto"
      variant="primary"
    >
      {training.title}
    </Button>
  ));

  const afterChoosing: JSX.Element = (
    <ChosenTrainingShow training={chosenTraining} setChosen={setChosen} />
  );

  const beforeChoosing: JSX.Element = (
    <div className="w-10/12 mx-auto text-center mt-6">
      <h1 className="text-4xl">Wybierz trening</h1>
      <div className="grid grid-cols-2 gap-10 my-20">{renderedTrainings}</div>
      <div className="border w-fit mx-auto p-4">
        Tutaj bedzie jakas historia treningow
      </div>
    </div>
  );
  return !chosen ? beforeChoosing : afterChoosing;
}

export default AllTrainingsShow;
