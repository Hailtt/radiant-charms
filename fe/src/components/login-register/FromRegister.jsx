import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FromRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    phone: "",
    password: "",
    // passwordAgain: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    navigate("/");
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="header">Radiant Charm</h1>
        <p className="description">luxury & fashion</p>
        <input
          className="input"
          type="text"
          placeholder="User Name"
          name="username"
          value={data.username}
          onChange={(e) => {
            const { name, value } = e.target;
            setData((prev) => {
              return { ...prev, [name]: value };
            });
          }}
        />
        <input
          className="input"
          type="number"
          name="phone"
          value={data.phone}
          onChange={(e) => {
            const { name, value } = e.target;
            setData((prev) => {
              return { ...prev, [name]: value };
            });
          }}
          placeholder="Phone"
        />
        <input
          className="input"
          type="password"
          name="password"
          value={data.password}
          onChange={(e) => {
            const { name, value } = e.target;
            setData((prev) => {
              return { ...prev, [name]: value };
            });
          }}
          placeholder="Password"
        />
        {/* <input
          className="input"
          type="password"
          name="passwordAgain"
          value={data.passwordAgain}
          onChange={(e) => {
            const { name, value } = e.target;
            setData((prev) => {
              return { ...prev, [name]: value };
            });
          }}
          placeholder="Password Again"
        /> */}
        <button className="btn" type="submit">
          Register
        </button>
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
