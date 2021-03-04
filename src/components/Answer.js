import React from 'react';

const Answer = ({display}) => {
    return (
        <div className='rounded text-center card shadow mx-auto'>
            {display ? <h3>{display}</h3> : ''}
        </div>
    );
}

export default Answer;