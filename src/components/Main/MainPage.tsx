import React from 'react';
import {useFetchAllTrainingsQuery} from "../../store";
import AllTrainingsShow from "./AllTrainingsShow";

function MainPage() {

    const {data, error, isFetching} = useFetchAllTrainingsQuery();

    let content;

    if (isFetching) {
        content = <h1>Data is loading...</h1>
    } else if (error) {
        content = <h1>Error loading data..</h1>
    } else if (data) {
        content = <AllTrainingsShow trainings={data}/>
    } else {
        content = <h1>FATAL ERROR, DESTROY YOUR DEVICE ASAP</h1>
    }

    return (
        <>
            {content}
        </>
    );
}

export default MainPage;