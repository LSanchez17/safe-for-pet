import React, {useEffect, useState} from 'react';
import SearchBar from './components/SearchBar';
import Answer from './components/Answer';
import UserNotices from './components/UserNotices';
import AnimalApi from './helpers/apiCommunication';
import loggingApi from './helpers/loggingApi';
import './styles/index.css';
import SpeechRecognition from "react-speech-recognition";


function App() {
  let [answer, setAnswer] = useState(null);
  let [listOfWarnings, setWarnings] = useState();
  const noSpeechSupport = SpeechRecognition.browserSupportsSpeechRecognition();

  const submitSearchTerm = async (term, errors = null) => {
    /* console.log(term);
    * call helper function here with term
    * return data to answer, setAnswer is called
    *  console.log(term)
    */
    setWarnings(null);
    setAnswer(null);
    if(errors){
      // console.log(errors)
      setWarnings(errors);
      return;
    }
    else{
      try{
        if(term.voiceLog){
            await AnimalApi.sendVoiceLog(term.voiceLog);
        }
        let apiResponse = await AnimalApi.getSpecificFood(term);
        
        // console.log(apiResponse);
        setAnswer(apiResponse.food);
      }
      catch(e){
        setWarnings(e);
      }
    }
  }

  useEffect(() => {
    const logUserVisit = async () => {
      loggingApi.logVisit();
    }
    //logs user's visit upon entering
    //stores IP, and time last visited
    logUserVisit();
  },[])

  return (
    <div className='App ml-2 mr-2 rounded card shadow'>
      { !noSpeechSupport ? <h2>Your browser/system does not support the speech library</h2> : ''}
      <h3 className='MissionStatement rounded text-white text-center m-3 p-3 mx-auto shadow'>Is that safe for my pet to eat?</h3>
      <SearchBar searchFn={submitSearchTerm}/>
      {answer ? <Answer food={answer.foodname} poisonous={answer.poisonous} reference={answer.reference}/> : ''}
      <UserNotices warnings={listOfWarnings}/>
      <footer className='pt-lg-5 text-center text-white'>
        <span><small>Icons from <a className='text-primary' href='flaticon.com'>flatIcon.com</a></small></span>
      </footer>
    </div>
  );
}

export default App;
