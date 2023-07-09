import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import WorkoutsPage from "./components/WorkoutsPage";
import Home from "./components/Home";
import PreviousWorkoutsPage from "./components/PreviousWorkoutsPage";
import CurrentWorkout from "./components/CurrentWorkout";
import ExerciseSetsPage from "./components/ExerciseSetsPage";
import Login from "./components/Login.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import BlueprintSelection from "./components/BlueprintSelection.tsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve user information from storage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    // Update user information in storage whenever it changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  if (loading) {
    return null;
  }

  if (!user && !loading) {
    return (
      <div className="App">
        <NavBar setUser={setUser} user={user} />
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/blueprint" element={<BlueprintSelection />} />
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
