import { Button, Typography } from "@mui/material";
import "./App.css";
import {
  OutPortal,
  InPortal,
  createHtmlPortalNode,
} from "react-reverse-portal";
import { useState } from "react";

function App() {
  const containerANode = createHtmlPortalNode();
  const containerBNode = createHtmlPortalNode();
  const [_switch, setSwitch] = useState(false);

  const handleSwitch = () => {
    setSwitch(!_switch);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSwitch}>
        Switch
      </Button>
      <InPortal node={_switch ? containerANode : containerBNode}>
        <Typography variant="h3">hello world</Typography>
      </InPortal>
      <div className="App">
        <div className="container">
          <OutPortal node={containerANode} />
        </div>
        <div className="container">
          <OutPortal node={containerBNode} />
        </div>
      </div>
    </div>
  );
}

export default App;
