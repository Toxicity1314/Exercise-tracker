import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import WorkoutsPage from "./components/WorkoutsPage";
import Home from "./components/Home";
import PreviousWorkoutsPage from "./components/PreviousWorkoutsPage";
import CurrentWorkout from "./components/CurrentWorkout";
import ExerciseSetsPage from "./components/ExerciseSetsPage";
import Login from "./components/Login.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
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
