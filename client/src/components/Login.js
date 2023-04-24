import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { redirect } from "react-router-dom";

//old user login
function Login({ setUser }) {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState([]);

  function handleFetch(route) {
    fetch(`/${route}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        redirect("/user");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Username"
            placeholder="Username"
            name="username"
            value={userLogin.username}
            onChange={handleChange}
          />

          <Form.Input
            fluid
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          color="blue"
          type="submit"
          // disabled={!userLogin.username || !userLogin.password}
          onClick={() => handleFetch("login")}
        >
          Login
        </Button>
        <Button
          color="blue"
          type="submit"
          // disabled={!userLogin.username || !userLogin.password}
          onClick={() => handleFetch("users")}
        >
          Signup
        </Button>
      </Form>
      {errors.map((error) => (
        <h3>{error}</h3>
      ))}
    </div>
  );
}

export default Login;
