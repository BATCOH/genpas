import "./App.css";

import {
  faClipboard,
  faClipboardCheck,
  faSync
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { generators } from "./generators/";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faClipboard, faClipboardCheck, faSync);

function App() {
  const groups = generators.map((Generator, idx) => <Generator key={idx} />);
  return (
    <div className="App">
      <h1 className="App-title">Password generator</h1>
      <div className="App-groups">{groups}</div>
    </div>
  );
}

export default App;
