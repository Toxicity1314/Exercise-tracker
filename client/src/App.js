import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Login from "./components/Login.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";
import BlueprintSelection from "./components/BlueprintSelection.tsx";
import CurrentWorkoutPage from "./components/CurrentWorkoutPage.tsx";

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
    <div
      className="App"
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh", // Ensure the background covers the full height of the viewport
      }}
    >
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/blueprints" element={<BlueprintSelection />} />
        <Route path="/current-workout" element={<CurrentWorkoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
