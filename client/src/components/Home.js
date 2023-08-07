import React from "react";

function Home({ user }) {
  return (
    <header className="nav">{`Hello ${user.username} Welcome to the Workout app Please select a workout or continue where you left off`}</header>
  );
}

export default Home;
