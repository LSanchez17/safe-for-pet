import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import Answer from './components/Answer';
import './styles/index.css';

function App() {
  let [answer, setAnswer] = useState(null);

  const submitSearchTerm = async (term) => {
    // call helper function here with term
    // return data to answer, setAnswer is called
    console.log(term)
    await setAnswer(term.searchTerm);
  }

  return (
    <div className='App bg-info h-100 rounded card justify-content-center shadow'>
      <h3 className='rounded bg-primary text-white text-center jumbotron mx-auto shadow'>Is that safe for my pet to eat?</h3>
      <SearchBar searchFn={submitSearchTerm}/>
      <Answer display={answer}/>
      <footer className='text-center text-white'>
        <span><small>Icons from <a className='text-primary' href='flaticon.com'>flatIcon.com</a></small></span>
      </footer>
    </div>
  );
}

export default App;
