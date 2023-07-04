import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import WorkoutsPage from "./components/WorkoutsPage";
import Home from "./components/Home";
import PreviousWorkoutsPage from "./components/PreviousWorkoutsPage";
import CurrentWorkout from "./components/CurrentWorkout";
import ExerciseSetsPage from "./components/ExerciseSetsPage";
import LoginV2 from "./components/LoginV2.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<LoginV2 setUser={setUser} />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/currentworkout" element={<CurrentWorkout />} />
        <Route path="/previous" element={<PreviousWorkoutsPage />} />
        <Route
          path="/exercise_sets"
          element={<ExerciseSetsPage user={user} />}
        />
        <Route path="/" element={<Home user={user} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
