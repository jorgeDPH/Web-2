import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { Home,About, Dashboard } from "./components/NewInput";

import HomeButton from "./components/HomeButton";

export default function BasicExample() {

  let dummyData = [
    {
      id: 1,
      name: 'Daniel'
    },
    {
      id: 2,
      name: 'Jorge'
    },
    {
      id: 3,
      name: 'Antonio'
    },
    {
      id: 4,
      name: 'Sebas'
    },
  ]

  return (

    <Router>

      <HomeButton />

      <Link style={{ padding: "30px" }} to="/about">Hooks</Link>

      <Link style={{ padding: "30px" }} to="/dashboard">User Params</Link>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard/:name">
          <Dashboard data/>
        </Route>
      </Switch>

    </Router>

    
  );
}