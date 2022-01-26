//React App
import {useState, useEffect} from "react"
import MemeGen from "./Components/MemeGen";
import UseRef from "./Components/UseRef";
function App() {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const handleClick = () => {
    //setCount(count*2);
    
    setCount((previousVal) => {
      previousVal *= 2;
      return previousVal;
    });

  }

  // useEffect -1
  // Called for every re-render.
  useEffect(() => {

    console.log("Use Effect 1");

    return () => {
      //Cleanup
      console.log("Something Component unmounted");
    }
  });
  
  // useEffect -2
  // Called only once.
  useEffect(() => {
    console.log("Use Effect 2");
  }, []);
  

  // useEffect -3
  // Called every time "count" re-renders
  useEffect(() => {
    console.log("Use Effect 3");
    return () => {
      //Cleanup
      console.log("Text Component unmounted");
    }
  }, [text]);
  

  return (
    <div className="App">
      <h1>Count Clicks: {count}</h1>
      <button onClick={handleClick}>click</button>
      <br />
      <input type="text" value={text} onChange={(e) => {
        setText(e.target.value);
      }} />
      <hr />
      <UseRef/>
    </div>
  );
}

export default App;
