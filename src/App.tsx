import { Button } from "@mui/material";
import { useMemo, useState } from "react";
import {
  createHtmlPortalNode,
  InPortal,
  OutPortal,
} from "react-reverse-portal";
import "./App.css";
import Field from "./Field";

function App() {
  const contentNode = useMemo(() => createHtmlPortalNode(), []);
  const [change, setChange] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setChange(!change)}>
        Switch
      </Button>
      <InPortal node={contentNode}>
        <Field />
      </InPortal>
      <div className="App">
        <div className="container">
          {change && <OutPortal node={contentNode} />}
        </div>
        <div className="container">
          {!change && <OutPortal node={contentNode} />}
        </div>
      </div>
    </div>
  );
}

export default App;
