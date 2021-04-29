import React, { useState } from 'react';

const Foods = ({foods}) => {
    let [currentPage, setCurrentPage] = useState(0);
    let [newPage, setNewPage] = useState(1);

    let rows = foods.map((food, idx) => {
        return (
            <tr key={idx}>
                <th>{food.animal}</th>
                    <td>{food.foodname}</td>
                    <td>{food.poisonous}</td>
                    <td>{food.reference}</td>
            </tr>
            )
    });

    let [displayedRows, setDisplayedRows] = useState(rows.slice(currentPage*5, setNewPage*5));

    const paginate = () => {        
            setCurrentPage(currentPage++);
            setNewPage(newPage++);

            let startingPoint = currentPage *= 5;
            let endOfSlice = newPage *= 5;
            setDisplayedRows(rows.slice(startingPoint, endOfSlice));
    }

    console.log(currentPage, newPage)

    return (
        <div>
            <p>Showing the first 5 records</p>
            <table className='table'>
                <tbody>
                    {displayedRows}
                </tbody>
            </table>
            <button onClick={paginate}>Next set of records</button>
        </div>
    )
};

export default Foods;