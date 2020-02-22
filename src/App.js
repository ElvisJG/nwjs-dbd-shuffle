import React from "react";
import { Switch, Route } from "react-router-dom";
import { Shuffle } from "./components/Shuffle";
import { Home } from "./components/Home";
import { DataProvider } from "./data";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <DataProvider>
        <Route path="/survivor" component={Shuffle} />
        <Route path="/killer" component={Shuffle} />
      </DataProvider>
    </Switch>
  );
};

export default App;
