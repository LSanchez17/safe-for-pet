import React from 'react';

const Voices = ({voices}) => {
    let viewVoices = voices.map((voice,idx) => {
        return (
        <div key={idx} className='card my-2'>
            <p className='card-text'>{voice.voice_log}</p>
        </div>);
    });
    return (
        <div className='card-columns'>
            {viewVoices}
        </div>
    )
};

export default Voices;