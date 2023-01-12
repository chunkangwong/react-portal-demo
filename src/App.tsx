import { Button, Portal, Typography } from "@mui/material";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const containerARef = useRef<HTMLDivElement>(null);
  const containerBRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleShow}>
        Switch
      </Button>
      <div className="App">
        <div className="container" ref={containerARef}>
          <Portal
            container={show ? containerARef.current : containerBRef.current}
          >
            <Typography variant="h3">hello world</Typography>
          </Portal>
        </div>
        <div className="container" ref={containerBRef}></div>
      </div>
    </div>
  );
}

export default App;
