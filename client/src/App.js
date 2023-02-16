import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import WorkoutsPage from "./components/WorkoutsPage";
import Home from "./components/Home";
import PreviousWorkoutsPage from "./components/PreviousWorkoutsPage";
import CurrentWorkout from "./components/CurrentWorkout";
import RepsPage from "./components/RepsPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        setUser(null);
      }
    });
  }, []);

  if (!user)
    return (
      <div>
        <Login setUser={setUser} />
      </div>
    );

  return (
    <div className="App">
      <NavBar setUser={setUser} />
      <Routes>
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/currentworkout" element={<CurrentWorkout />} />
        <Route path="/previous" element={<PreviousWorkoutsPage />} />
        <Route path="/reps" element={<RepsPage user={user}/>} />
        <Route path="/" element={<Home user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
