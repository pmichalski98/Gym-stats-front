import { useFetchAllTrainingsQuery } from "../../store";
import AllTrainingsShow from "./AllTrainingsShow";
import ErrorAlert from "../../components/ErrorAlert";
import SkeletonLoader from "../../components/SkeletonLoader";

function MainPage() {
  // Need to type this
  const { data, error, isFetching } = useFetchAllTrainingsQuery();

  let content: JSX.Element;

  if (isFetching) {
    content = (
      <div className="mt-20 container w-2/3 mx-auto">
        <SkeletonLoader times={5} className=" h-10" />
      </div>
    );
  } else if (error) {
    content = (
      <ErrorAlert className="mt-20 w-1/2" message="Error loading trainings" />
    );
  } else if (data) {
    content = <AllTrainingsShow trainings={data} />;
  } else {
    content = <h1>FATAL ERROR, DESTROY YOUR DEVICE </h1>;
  }

  return content;
}

export default MainPage;
