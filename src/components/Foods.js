import React from 'react';

const Foods = ({foods}) => {
    let rows = foods.map(food => {
        return (
            <tr>
                <th>{food.animal}</th>
                    <td>{food.foodname}</td>
                    <td>{food.poisonous}</td>
                    <td>{food.reference}</td>
            </tr>
            )
    });

    return (
        <div>
            <table className='table'>
                {rows}
            </table>
        </div>
    )
};

export default Foods;