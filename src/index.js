import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./data";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
