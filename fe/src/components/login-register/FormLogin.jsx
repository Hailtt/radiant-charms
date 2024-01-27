import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="header">Radiant Charm</h1>
        <p className="description">luxury & fashion</p>
        <input
          className="input"
          type="text"
          name="username"
          value={data.username}
          placeholder="User Name"
          required
          onChange={(e) => {
            const { name, value } = e.target;
            setData((prev) => {
              return { ...prev, [name]: value };
            });
          }}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          required
          onChange={(e) => {
            const { name, value } = e.target;
            setData((prev) => {
              return { ...prev, [name]: value };
            });
          }}
        />
        <button className="btn" type="submit">
          Login
        </button>
        <p className="label">
          Don't have an account yet,{" "}
          <Link to="/register" className="link">
            register now!
          </Link>
        </p>
      </form>
    </>
  );
};

export default FormLogin;
