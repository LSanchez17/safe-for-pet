import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SearchBar = ({searchFn}) => {
    let {transcript, resetTranscript} = useSpeechRecognition();
    
    let [searchTerm, setSearchTerm] = useState(null);
    let [talking, setTalking] = useState(false);
    let [log, setTranscript] = useState(null);


    const handleChange = (evt) => {
        let {name, value} = evt.target;
        setSearchTerm({[name]: value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(searchTerm)
        if(!log){
            searchFn(searchTerm);
            setSearchTerm(null);
            return;
        }
        searchFn({searchTerm: log});
        setSearchTerm(null);
        setTranscript(null);
        console.log(talking, searchTerm, log)
        return;
    }

    useEffect( () => {
        //sets what the user is saying real time.
        setTranscript(transcript);
    },[transcript]);

    const voiceTalk = async () => {
        //if we are talking, and we hit the mic, press it again to stop talking
        //if we are not talking, start listening, and set the transcript to state
        //output the state to the search function using commands that listen for 
        //a specific item
        if(talking){
            setTalking(false);
            await SpeechRecognition.stopListening();
            return;
        }
        else{
            setTalking(true);            
            resetTranscript();
            await SpeechRecognition.startListening({continuous: true});
            return;
        }
    }



    return (
        <div>
            <form className='mx-auto form-group roudned text-center' onSubmit={handleSubmit}>
                <label className='m-2 text-white form-group' htmlFor='searchTerm'><h5>Input your query:</h5></label>
                <input className='m-1 input rounded shadow'
                       type='text'
                       name='searchTerm' 
                       id='searchTerm' 
                       placeholder='Enter your item...'
                       onChange={handleChange}>
                </input>

                <div>
                    <img className='Mic mr-n2' src='./microphone.png' alt='microphone' onClick={voiceTalk}></img>
                        {
                            !talking ? '' : <div id='userSignalForTalking' className="spinner-grow text-danger ml-n3" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                        }
                </div>
                <button className='m-2 btn btn-success rounded shadow' type='submit'>Search</button>
            </form> 
        </div>
    );
}

export default SearchBar;
