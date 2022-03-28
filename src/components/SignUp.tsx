import React from "react";
import "../style/Style.css";
import { useContext, useState } from "react";
import { renderHeader } from "../App";

function SignUp() {
  let storeUserDetails = React.useContext(renderHeader);
  console.log(storeUserDetails);

  const [userID, SetUserID] = useState("");
  const [userFirstName, SetUserFirstName] = useState("");
  const [userSecondName, SetUserSecondName] = useState("");
  const [userPassword, SetUserPassword] = useState("");

  const submit = () => {
    const details = storeUserDetails.userDetails;

    const test = details.filter((e) => {
      if (userID === e.userID) {
        return true;
      }
    });

    if (
      userID === "" ||
      userFirstName === "" ||
      userSecondName === "" ||
      userPassword === ""
    ) {
      if (userID === "" || userID.length <= 6) {
        if (userID === "") {
          alert("User ID should not be empty");
          return;
        }
        if (userID.length <= 5) {
          alert("user ID should be minimum 5 characters");
          return;
        }
      }

      if (userFirstName === "") {
        alert("userFirstName should not be empty");
        return;
      }
      
      if (userSecondName === "") {
        alert("userSecondName should not be empty");
        return;
      }
     
      if (userPassword === "") {
        alert("userPassword should not be empty");
        return;
      }
    }

    

    if (test.length === 0) {
      storeUserDetails?.SetuserDetails([
        ...details,
        {
          userID: userID,
          FirstName: userFirstName,
          SecondName: userSecondName,
          password: userPassword,
          cart: [],
        },
      ]);
      storeUserDetails?.TooglesignUp(false);
      storeUserDetails.SetIsLoggedIn(true);
      storeUserDetails.SetcurrentUser({
        userID: userID,
        FirstName: userFirstName,
        SecondName: userSecondName,
        password: userPassword,
        cart: [],
      });
    } else {
      alert(` User ID ${userID} is already taken`);
    }
  };

  return (
    <>
      <div id="login-form-wrap">
        <h2>Sign Up</h2>
        <button onClick={() => storeUserDetails.TooglesignUp(false)}>x</button>
        <div id="login-form">
          <p>
            <input
              onChange={(event) => {
                SetUserID(event.target.value);
              }}
              type="text"
              value={userID}
              name="userID"
              placeholder="User ID"
            />
            <input
              onChange={(event) => {
                SetUserFirstName(event.target.value);
              }}
              type="text"
              name="FirstName"
              placeholder="FirstName"
              required
            />
            <input
              onChange={(event) => {
                SetUserSecondName(event.target.value);
              }}
              type="text"
              name="SecondName"
              placeholder="SecondName"
              required
            />
            <i className="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              onChange={(event) => {
                SetUserPassword(event.target.value);
              }}
              type="password"
              id="email"
              name="password"
              placeholder="Password"
              required
            />
            <i className="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input type="submit" id="login" onClick={submit} />
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
