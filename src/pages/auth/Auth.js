import React from "react";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";
import "./auth.scss";

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
