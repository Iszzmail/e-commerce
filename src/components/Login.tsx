import { renderHeader } from "../App";
import React, { useState } from "react";
import SignUp from "./SignUp";

const Login: React.FC = () => {
  let storeUserDetails = React.useContext(renderHeader);

  const [loginUserName, setLoginUserName] = useState<string>("");
  const [loginUserPassword, setLoginUserPassword] = useState<string>("");
  const [showSignup, setShowSignUp] = useState<boolean>(false);

  console.log(loginUserPassword);

  const validateUser = () => {
    storeUserDetails.userDetails.map((e) => {
      if (e.userID.includes(loginUserName)) {
        console.log("there");
        storeUserDetails.currentUser.push(e)
      } else {
        setShowSignUp(true);
      }
    });

  };

  const ForceSignUp=()=>{
    storeUserDetails.TooglesignUp(true)
    storeUserDetails.ToogleLoginn(false)
  }



  return (
    <div>
      <>
        <div id="login-form-wrap">
          <button onClick={() => storeUserDetails.ToogleLoginn(false)}>
            x
          </button>
          <h2>Login</h2>
          <div id="login-form">
            <p>
              <input
                type="text"
                name="User Name"
                placeholder="User Name"
                value={loginUserName}
                onChange={(event: any) => {
                  setLoginUserName(event.target.value);
                }}
              />
              <input
                type="text"
                name="Password"
                placeholder="Password"
                value={loginUserPassword}
                onChange={(event: any) => {
                  setLoginUserPassword(event.target.value);
                }}
              />
            </p>
            <p>
              <button onClick={validateUser}>Log in</button>
              {showSignup ? (
                <button onClick={ForceSignUp}>
                  Sign Up
                </button>
              ) : null}
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
