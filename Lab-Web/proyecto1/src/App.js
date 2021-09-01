<<<<<<< Updated upstream
import "./App.css";
import "./index.css";
import React, { useState, useContext,useEffect } from "react";
function App() {
  
  const [users, setUsers] = useState([{ id: 0, name: "Jorge" }]);

  const onClick = () => {
    setUsers ([...users,{id: users.length, name: "Roa"}])
  };  

  var dataComponent={
    type:"button",
    value:"update",
    hidden:false
  }

  const [date, setDate] = useState(new Date());

  useEffect(() =>{

    var timerID = setInterval(()=> tick(),1000)

    return function cleanup(params){
      clearInterval(timerID)
    }
  });

  function tick(){
    setDate(new Date());
  }

  return (
    <div>
      <input onClick={onClick} {...dataComponent} />
      <div>
        <h1>{date.toLocaleTimeString()}</h1>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
=======
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home,About, Dashboard } from "./components/NewInput";

export default function BasicExample() {

  return (

    <Router>

      <Link style={{ padding: "30px" }} to="/">Home</Link>

      <Link style={{ padding: "30px" }} to="/about">About</Link>

      <Link style={{ padding: "30px" }} to="/dashboard">Dashboard</Link>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>

    </Router>
  );
}
>>>>>>> Stashed changes
