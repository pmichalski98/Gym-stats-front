import { ClipLoader } from "react-spinners";

interface Props {
  counter: number;
}
function CountDownPage({ counter }: Props) {
  return (
    <div className=" mx-auto">
      <h1 className="text-6xl my-24">Training starts in ...</h1>
      <h1 className="text-6xl text-center">{counter}</h1>
      <ClipLoader color="cyan" size={50} />
    </div>
  );
}

export default CountDownPage;
