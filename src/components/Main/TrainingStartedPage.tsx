import useCountdown from "../../hooks/use-countdown.js"
import CountDownPage from "./CountDownPage.jsx";

function TrainingStartedPage({training}) {

    let counter = useCountdown(1, 3, 1000);

    console.log(training);

    return (
        <>
            {counter < 4 ? <CountDownPage counter={counter}/> : <div>Page after training started</div>}
        </>
    );
}

export default TrainingStartedPage;

