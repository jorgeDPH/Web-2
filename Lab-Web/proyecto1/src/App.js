import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";

<<<<<<< Updated upstream

function App() {
  
  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
=======

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
>>>>>>> Stashed changes

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        if (seconds > 59){
          setMinutos(minutos => minutos + 1);  
          setSeconds(0);
        }
        else if (minutos>59){
          setHoras(horas => horas + 1);  
          setMinutos(0);  
          setSeconds(0);

        }
        else{
        setSeconds(seconds => seconds + 1);
        }
      }, 100);
    
    return () => clearInterval(interval);
  });

  
  return (
    <div>
      {horas} - {minutos} - {seconds}
      
      
    </div>
  );
}
<<<<<<< Updated upstream

export default App;
=======
>>>>>>> Stashed changes
