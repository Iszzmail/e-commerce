import { renderHeader } from "../App";
import React, { useState } from "react";
import { Product } from "./products";

const Login: React.FC = () => {
  let storeUserDetails = React.useContext(renderHeader);

  const [loginUserName, setLoginUserName] = useState<string>("");
  const [loginUserPassword, setLoginUserPassword] = useState<string>("");
  let flag: boolean;
  let flag2: boolean;
  let current: {
    userID: string;
    FirstName: string;
    SecondName: string;
    password: string;
    cart: Array<Product>;
  };
  const validateUser = () => {
    for (const i in storeUserDetails.userDetails) {
      
      if (storeUserDetails.userDetails[i].userID === loginUserName) {
        flag = true;
        current = storeUserDetails.userDetails[i];
        if (flag) {
          flag2 = true;
        }
      }
    }

    if (flag2 === undefined) {
      alert("please sign up");
      console.log('ppp')
      storeUserDetails.TooglesignUp(true);
      storeUserDetails.ToogleLoginn(false);
    }
    if (flag) {
      if (
        current.userID === loginUserName &&
        current.password === loginUserPassword
      ) {
     
        storeUserDetails.SetIsLoggedIn(true);
        storeUserDetails.ToogleLoginn(false);
        storeUserDetails.SetcurrentUser(current)
      } 
      if (current.password !== loginUserPassword) {
        alert(`kindly enter the correct password ${loginUserName}`);
      }
    }
  };

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
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
