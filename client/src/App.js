import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/auth")
      .then((r) => {
        if (r.ok){
          r.json().then(user => setUser(user))
        }
      })
  }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  if(!user){
    return (
    <div>
      <NavBar/>
      <Login setUser={setUser} />
     </div>
    )
  }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route 
          path="/testing"
          element = {"Test Route"}
          />
          <Route 
          path="/login"
          element= {<Login setUser={setUser}/>}
          />
          <Route
          path="/"
          // element={<Home/>}
          />
      </Routes>
    </div>
  );
}

export default App;