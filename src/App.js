import React from "react";
import { Switch, Route } from "react-router-dom";
import { useData } from "./data";
import { useParams } from "./hooks/useParams";
import { Shuffle } from "./components/Shuffle";
import { Home } from "./components/Home";

const App = () => {
  const {
    data: { survivor, killer, perks }
  } = useData();
  const side = useParams();

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/Survivor"
        render={() => (
          <Shuffle characters={survivor} side={side} perks={perks} />
        )}
      />
      <Route
        path="/Killer"
        render={() => <Shuffle characters={killer} side={side} perks={perks} />}
      />
    </Switch>
  );
};

export default App;
