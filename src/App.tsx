import { createPortal } from "react-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {createPortal(<h1>hello world</h1>, document.body)}
      </div>
    </div>
  );
}

export default App;
