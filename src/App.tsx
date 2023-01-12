import { Button, Portal, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleShow}>
        Show
      </Button>
      <div className="App">
        <div className="container">
          {show && (
            <Portal container={containerRef.current}>
              <Typography variant="h3">hello world</Typography>
            </Portal>
          )}
        </div>
        <div className="container" ref={containerRef}></div>
      </div>
    </div>
  );
}

export default App;
