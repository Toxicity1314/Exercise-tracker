import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar({ setUser }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null));
  }

  return (
    <header className="nav">
      <Button as={NavLink} to="/">
        home
      </Button>
      <Button as={NavLink} to="/workouts">
        workout selection
      </Button>
      <Button as={NavLink} to="/previous">
        previous workouts
      </Button>
      <Button as={NavLink} to="/currentworkout">
        current workout
      </Button>
      <Button as={Link} onClick={handleLogout} to="/">
        log out
      </Button>
    </header>
  );
}

export default NavBar;
