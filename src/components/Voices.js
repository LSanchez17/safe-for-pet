import React from 'react';

const Voices = ({voices}) => {
    let totalVoiceInput = voices.length;
    return (
        <div className='m-2 card-columns'>
            <h2 className='card-text'>{totalVoiceInput} total voice inputs so far!</h2>
        </div>
    )
};

export default Voices;