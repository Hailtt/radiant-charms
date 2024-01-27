import React from "react";
import { Link } from "react-router-dom";
const FormLogin = () => {
  return (
    <>
      <form className="container">
        <h1 className="header">Radiant Charm</h1>
        <p className="description">luxury & fashion</p>
        <input className="input" type="text" placeholder="User Name" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn">Login</button>
        <p className="label">
          Don't have an account yet,{" "}
          <Link to="./register" className="link">
            register now!
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
