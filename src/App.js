// import logo from './logo.svg';
import { useState }  from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me please!
      </button>
    </div>
  );
}

export default App;
