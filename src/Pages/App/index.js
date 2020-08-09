import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "../../Components/Header";

import Home from "../Home";
import Cooking from "../Cooking";
import Baking from "../Baking";

function App() {
  return (
    <Router>
      <div>
        <Header title="Favourite Recipes" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cooking" component={Cooking} />
          <Route path="/baking" component={Baking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
