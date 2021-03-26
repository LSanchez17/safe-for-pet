import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import Answer from './components/Answer';
import UserNotices from './components/UserNotices';
import './styles/index.css';
import SpeechRecognition from "react-speech-recognition";


function App() {
  let [answer, setAnswer] = useState(null);
  let [listOfWarnings, setWarnings] = useState();
  const noSpeechSupport = SpeechRecognition.browserSupportsSpeechRecognition();

  const submitSearchTerm = async (term, errors = null) => {
    // call helper function here with term
    // return data to answer, setAnswer is called
    // console.log(term)
    if(errors){
      console.log(errors)
      setWarnings(errors);
      return;
    }
    else{
      setWarnings();
      await setAnswer(term.searchTerm);
    }
  }

  return (
    <div className='App bg-info h-100 rounded card justify-content-center shadow'>
      { !noSpeechSupport ? <h2>Your browser/system does not support the speech library</h2> : ''}
      <h3 className='rounded bg-primary text-white text-center jumbotron mx-auto shadow'>Is that safe for my pet to eat?</h3>
      <SearchBar searchFn={submitSearchTerm}/>
      <Answer display={answer}/>
      <UserNotices warnings={listOfWarnings}/>
      <footer className='text-center text-white'>
        <span><small>Icons from <a className='text-primary' href='flaticon.com'>flatIcon.com</a></small></span>
      </footer>
    </div>
  );
}

export default App;
