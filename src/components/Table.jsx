import {Fragment} from "react";

function Table({ config, data }) {

    const renderedLabels = config.map((column, index) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th className="pr-6" key={column.label}>{column.label}</th>
    });

    const readOnlyRows = data.map((rowData, index) => {
        const renderedCells = config.map((column) => {
           return <td key={column.label} className='p-3'>{column.render(rowData, index)}</td>
        });
        return (
            <tr className='border-b' key={rowData.id}>
                {renderedCells}
             </tr>
            );
    })

    return (
        <table className="mx-auto">
            <thead>
                <tr className='border-b-2'>
                    {renderedLabels}
                </tr>
            </thead>
            <tbody>
                {readOnlyRows}
            </tbody>
        </table>
    );
}

export default Table;