import  React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import InputButton from "./InputButton";

function Home() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      if (seconds < 60) {
        setSeconds(seconds => seconds + 1);
      }
      else {
        setSeconds(0)
        if (minutes < 60) {
          setMinutes(minutes => minutes + 1);
        }

        else {
          setSeconds(0);
          setMinutes(0);
          setHours(hours => hours + 1);
        }
      }
    }, 1);

    return () => clearInterval(interval);
  });

    return (
      <div>
        <h2>Timer</h2>
        <h3>The current timer is: {hours}:{minutes}:{seconds}</h3>
      </div>
    );
  }
  
  function About() {
    const [users, setUsers] = useState([{ id: 0, name: "Equipo dinamita" }]);

    const onClick = () => {
      setUsers([...users, { id: users.length, name: "Entregable" }])
    };

    var dataComponent = {
      type: 'button',
      value: 'Update',
      hidden: false
    }

    return (
      <div>
        <h2>About</h2>
        <InputButton onClick={onClick} {...dataComponent} />
        <div>
          {users.map((e) => (
            <div>
              {e.id} - {e.name}
            </div>
          ))}
        </div>
      </div>
  )
  }

  const Dashboard = ({data}) => {
    const { name } = useParams();
    return(
      <div>
        <h2>User Params Ejemplo</h2>
        <div>{name}</div>
      </div>
    )
  }

export {Home,About,Dashboard} ;