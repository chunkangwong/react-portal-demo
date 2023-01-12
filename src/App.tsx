import { Button, Typography } from "@mui/material";
import "./App.css";
import {
  OutPortal,
  InPortal,
  createHtmlPortalNode,
} from "react-reverse-portal";
import { useState } from "react";

function App() {
  const contentNode = createHtmlPortalNode();
  const [_switch, setSwitch] = useState(false);

  const handleSwitch = () => {
    setSwitch(!_switch);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSwitch}>
        Switch
      </Button>
      <InPortal node={contentNode}>
        <Typography variant="h3">hello world</Typography>
      </InPortal>
      <div className="App">
        <div className="container">
          {_switch && <OutPortal node={contentNode} />}
        </div>
        <div className="container">
          {!_switch && <OutPortal node={contentNode} />}
        </div>
      </div>
    </div>
  );
}

export default App;
