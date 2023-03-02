import React from 'react';
import {useFetchAllTrainingsQuery} from "../../store";
import Accordion from "./Accordion.js";

function TrainingList() {

    const {data, error, isFetching} = useFetchAllTrainingsQuery();

    let content;

    if(isFetching) {
        content = <h1>Data is loading...</h1>
    } else if(error) {
        content = <div>Error loading data..</div>
    } else if (data) {
        content = <Accordion trainings={data}/>
    } else {
        content = <h1>FATAL ERROR, DESTROY YOUR DEVICE</h1>
    }

    return (
        <>
            {content}
        </>
    );
}

export default TrainingList;