import React from 'react';
import {useFetchAllTrainingsQuery} from "../../store";
import Accordion from "./Accordion";

function TrainingList() {

    const {data, error, isFetching} = useFetchAllTrainingsQuery();

    let content;

    if(isFetching) {
        content = <h1>Data is loading...</h1>
    } else if(error) {
        content = <div>Error loading data..</div>
    } else {
        content = <Accordion trainings={data}/>
    }

    return (
        <>
            {content}
        </>
    );
}

export default TrainingList;