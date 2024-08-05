import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15); //  it is Hooks useState

  // let counter = 15;

  const addValue = () => {
    if (counter == 20) {
     setCounter(counter = 20)
  } else{
    setCounter(counter+1)
  }
  };
  const removeValue = () => {
    if (counter == 0) {
      setCounter(counter = 0)
    }else{
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Ankit with React</h1>
      <h2>counter Value: {counter}</h2>

      <button onClick={addValue}> Add Value </button>
      <br />
      <br />
      <button onClick={removeValue}> Remove Value </button>
    </>
  );
}

export default App;
