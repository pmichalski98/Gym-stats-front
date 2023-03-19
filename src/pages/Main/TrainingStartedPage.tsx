import useCountdown from "../../hooks/use-countdown";
import CountDownPage from "./CountDownPage";
import { Training } from "../../types/training";

interface Props {
  training: Training;
}
function TrainingStartedPage({ training }: Props) {
  const counter = useCountdown(1, 3, 1000);

  return counter <= 3 ? (
    <CountDownPage counter={counter} />
  ) : (
    <div>Page after training started</div>
  );
}

export default TrainingStartedPage;
