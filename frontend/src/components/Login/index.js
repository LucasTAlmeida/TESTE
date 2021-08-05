import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import "./login.css";

import { AuthContext } from "../context/AuthContext";

function Login() {
  const history = useHistory();
  const { authentication } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({});

  function handleChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    authentication(usuario);
    setTimeout(() => {
      history.push("/pergunta");
    }, 1000);
  }

  return (
    <div className="container5">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange} id ="username" required/>
        </div>
        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} id ="password" required />
        </div>

        <div className="row">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
