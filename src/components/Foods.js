import React, { useState } from 'react';

const Foods = ({foods}) => {
    let [currentPage, setCurrentPage] = useState(0);
    let [newPage, setNewPage] = useState(1);
    let [displayedRows, setDisplayedRows] = useState();

    let rows = foods.map((food, idx) => {
        return (
            <tr key={idx}>
                <td>{food.animal}</td>
                <td>{food.foodname}</td>
                <td><a href={food.reference}>Source</a></td>
                <td>{food.poisonous ? 'Yes' : 'No'}</td>
            </tr>
            )
    });

    const paginate = () => {        
        setCurrentPage(currentPage += 1);
        setNewPage(newPage += 1);

        if(newPage*5 >= rows.length){
            document.querySelector('#next').classList = 'd-none';
        }
        if(currentPage*5 >= 5){
            document.querySelector('#back').classList = 'btn btn-warning btn-sm';
        }

        setDisplayedRows(rows.slice(currentPage*5, newPage*5));
    }

    const goBack = () => {
        setCurrentPage(currentPage -= 1);
        setNewPage(newPage -= 1);

        if(currentPage - 1 < 0){
            document.querySelector('#back').classList = 'd-none';
        }

        setDisplayedRows(rows.slice(currentPage*5, newPage*5));
    }

    const resetView = () => {
        //resets back to the beginning
        setCurrentPage(0);
        setNewPage(1);
        setDisplayedRows(rows.slice(0, 5));
        document.querySelector('#next').classList = 'btn btn-info btn-sm';
        document.querySelector('#back').classList = 'd-none';
    }

    const viewData = () => {
        //views the initial rendering
        setDisplayedRows(rows.slice(currentPage*5,newPage*5));
        document.querySelector('#reset').classList = 'btn btn-danger btn-sm';
        document.querySelector('#next').classList = 'btn btn-info btn-sm';
        document.querySelector('#show').classList = 'd-none';
    }

    return (
        <div>
            <table className='table'>
                <tbody>
                <tr>
                        <th scope="col">Animal</th>
                        <th scope="col">Food</th>
                        <th scope="col">Reference</th>
                        <th scope="col">Poisonous?</th>
                    </tr>
                    {displayedRows}
                </tbody>
            </table>
            <button id='reset' className='d-none' onClick={resetView}>Reset Data</button>
            <button id='next' className='d-none' onClick={paginate}>Next Page</button>
            <button id='back' className='d-none' onClick={goBack}>Previous Page</button>
            <button id='show' className='btn btn-primary btn-sm' onClick={viewData}>View Data</button>
        </div>
    )
};

export default Foods;