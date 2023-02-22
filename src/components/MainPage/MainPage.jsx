import React from 'react';
import {useFetchAllTrainingsQuery} from "../../store/index.js";
import AllTrainingsShow from "./AllTrainingsShow.jsx";

function MainPage() {

    const {data, error, isFetching} = useFetchAllTrainingsQuery();

    let content;

    if (isFetching) {
        content = <h1>Data is loading...</h1>
    } else if (error) {
        content = <h1>Error loading data..</h1>
    } else {
        content = <AllTrainingsShow trainings={data}/>
    }

    return (
        <>
            {content}
        </>
    );
}

export default MainPage;