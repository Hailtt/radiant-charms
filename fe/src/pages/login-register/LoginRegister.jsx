import React from "react";
import BackgroundImage from "./background-login.jpeg";
import { FormLogin, FormRegister } from "../../components";
const LoginRegister = () => {
  const urlParts = window.location.href.split("/");
  const urlCurrent = urlParts[3];

  return (
    <div className="RC-login-register">
      <img src={BackgroundImage} className="background" />
      {urlCurrent === "register" ? <FormRegister /> : <FormLogin />}
    </div>
  );
};

export default LoginRegister;
