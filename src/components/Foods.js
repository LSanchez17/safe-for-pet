import React, { useState } from 'react';

const Foods = ({foods}) => {
    let [currentPage, setCurrentPage] = useState(0);
    let [newPage, setNewPage] = useState(1);
    let [displayedRows, setDisplayedRows] = useState();

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

    const paginate = () => {        
        setCurrentPage(currentPage+1);
        setNewPage(newPage+1);

        if(currentPage*5 >= rows.length){
            document.querySelector('#next').classList = 'd-none';
        }

        console.log(currentPage, newPage);
        setDisplayedRows(rows.slice(currentPage*5, newPage*5));
    }

    const resetView = () => {
        //resets back to the beginning
        setCurrentPage(currentPage * 0);
        setNewPage(newPage * 0 + 1);
        setDisplayedRows(rows.slice(currentPage*5, newPage*5));
        console.log(currentPage, newPage);

    }

    const viewData = () => {
        //views the initial rendering
        setDisplayedRows(rows.slice(currentPage*5,newPage*5));
        document.querySelector('#reset').classList = 'btn btn-danger';
        document.querySelector('#next').classList = 'btn btn-secondary';
        document.querySelector('#show').classList = 'd-none';
    }

    return (
        <div>
            <p>Current Records</p>
            <table className='table'>
                <tbody>
                    {displayedRows}
                </tbody>
            </table>
            <button id='reset' className='d-none' onClick={resetView}>Reset Data</button>
            <button id='next' className='d-none' onClick={paginate}>Next set of records</button>
            <button id='show' className='btn btn-primary' onClick={viewData}>View Data</button>
        </div>
    )
};

export default Foods;