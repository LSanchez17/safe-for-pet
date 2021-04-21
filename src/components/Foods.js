import React from 'react';

const Foods = ({foods}) => {
    let viewFoods = foods.map(food => {
        return (
        <div>
            <h3>{food.animal}</h3>
            <h2>{food.foodname}</h2>
            <p>{food.poisonous}</p>
            <p>{food.reference}</p>
        </div>)
    })

    return (
        <div>
            {viewFoods}
        </div>
    )
};

export default Foods;