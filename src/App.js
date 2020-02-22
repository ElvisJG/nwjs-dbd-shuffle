import React from "react";
import { Switch, Route } from "react-router-dom";
import { Shuffle } from "./components/Shuffle";
import { Home } from "./components/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/survivor" component={Shuffle} />
      <Route path="/killer" component={Shuffle} />
    </Switch>
  );
};

export default App;
