function TrainingTable({config, data}) {

    const renderedLabels = config.map((column, index) => {

        return <h2 className="" key={column.label}>{column.label}</h2>
    });

    const readOnlyRows = data.map((rowData, index) => {
        const renderedCells = config.map((column) => {
            return <div key={column.label} className="flex justify-center ">{column.render(rowData, index)}</div>
        });
        return (
            <div className='contents' key={rowData.id}>
                {renderedCells}
            </div>
        );
    })

    return (
        <>
            <div className='contents'>
                {renderedLabels}
            </div>
            {readOnlyRows}
        </>
    );
}

export default TrainingTable;