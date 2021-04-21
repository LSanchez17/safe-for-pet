import React from 'react';

const Voices = ({voices}) => {
    let viewVoices = voices.map(voice => {
        return (
        <div>
            <p>{voice.voice_log}</p>
        </div>);
    });
    return (
        <div>
            {viewVoices}
        </div>
    )
};

export default Voices;