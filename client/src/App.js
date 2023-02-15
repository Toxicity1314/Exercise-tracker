import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import WorkoutsPage from "./components/WorkoutsPage";
import Home from "./components/Home";
import PreviousWorkoutsPage from "./components/PreviousWorkoutsPage";
import CurrentWorkout from "./components/CurrentWorkout";

function App() {
  const [user, setUser] = useState(null);
  const [currentWorkout, setCurrentWorkout] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/auth")
      .then((r) => {
        if (r.ok){
          r.json().then(user => setUser(user))
        }else{
          setUser(null)
        }
      })
  }, []);

  if(!user) return (
    <div>
      {/* <NavBar setUser={setUser}/> */}
      <Login setUser={setUser} />
     </div>
    )
  

  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Routes>
          <Route 
          path="/workouts"
          element = {<WorkoutsPage/>}
          />
          <Route 
          path="/login"
          element= {<Login setUser={setUser}/>}
          />
          <Route 
          path="/currentworkout"
          element= {<CurrentWorkout currentWorkout={currentWorkout}/>}
          />
          <Route 
          path="/previous"
          element= {<PreviousWorkoutsPage/>}
          />
          <Route
          path="/"
          element={<Home/>}
          />
      </Routes>
    </div>
  );
}

export default App;