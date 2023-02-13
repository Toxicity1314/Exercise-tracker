
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function NavBar() {
  const handleClick =()=>{
    
  }


  return (
    <header className="nav">
        <Button as={NavLink} to="/">home</Button>
        <Button as={NavLink} to="/people">people</Button>
        <Button as={NavLink} to="/places">places</Button>
        <Button as={NavLink} to="/activities">activities</Button>
        <Button as={Link} onClick={handleClick} to="/">log out</Button>  
    </header>
  );
}


export default NavBar;