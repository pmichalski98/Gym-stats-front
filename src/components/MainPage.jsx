import React from 'react';
import {useFetchAllTrainingsQuery} from "../store/index.js";
import TrainingsShow from "./TrainingsShow.jsx";

function MainPage() {

    const {data, error, isFetching} = useFetchAllTrainingsQuery();

    let content;

    if (isFetching) {
        content = <h1>Data is loading...</h1>
    } else if (error) {
        content = <h1>Error loading data..</h1>
    } else {
        content = <TrainingsShow trainings={data}/>
    }

    return (
        <>
            {content}
        </>
    );
}

export default MainPage;