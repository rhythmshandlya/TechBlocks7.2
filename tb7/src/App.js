import { useState, useEffect } from 'react';
import './App.css';
import DetailState from './Context/DetailState';
import Meme from './Components/Meme';
import UseRef from './Components/useRef';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  
  //This will update count
  const updateCount = () => {
    
    // Passing previous state and returning the new state
    setCount((previousState) => {
      return previousState * 2;
    });

    // Just passing the new state
    setCount(count+1);
  }
  
  //Called Once
  useEffect(() => {
    console.log("Once when everything renders!");
  },[]);

  //Use Effect
  useEffect(() => {
    console.log("A side effect happened on the screen!");
    return () => { 
      //Cleanup function
      console.log("A Component unmounted!");
    }
  });

  //Specific Rerender
  useEffect(() => {
    console.log("text component mounted");
    return () => { 
      //Cleanup function
      console.log("Text unmounted!");
    }
  },[text]);

  return (
    <DetailState>
      <div className="App">
        <header className="App-header">
          <h1>Count Clicks: {count}</h1>
          <button onClick={updateCount}>click</button>
          <br />
          <input type="text" value={text} onChange={(e) => {
            setText(e.target.value);
          }} />
        </header>
        <Meme />
        <UseRef />
      </div>
    </DetailState>
  );
}

export default App;
