import React from "react";
import { Link } from "react-router-dom";

const FromRegister = () => {
  return (
    <>
      <form className="container">
        <h1 className="header">Radiant Charm</h1>
        <p className="description">luxury & fashion</p>
        <input className="input" type="text" placeholder="User Name" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn">Register</button>
        <p className="label">
          Have an account yet,{" "}
          <Link to="/login" className="link">
            login now!
          </Link>
        </p>
      </form>
    </>
  );
};

export default FromRegister;
