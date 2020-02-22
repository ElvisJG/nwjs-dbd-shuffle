import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./data";
import App from "./App";

import "./font/PressStart2P-Regular.ttf";
import "./nes.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
