import React from "react";
import "../style/Style.css";
import { useContext, useState } from "react";
import { renderHeader } from "../App";

function SignUp() {
  let storeUserDetails = React.useContext(renderHeader);
  console.log(storeUserDetails?.UserName)
  console.log(storeUserDetails?.password)

  interface users{
    name:string,
    password:string,
    itemsAdded:[]
  }

  const [values,SetValues]=useState<users>({
    name:'',
    password:"",
    itemsAdded:[]
  })

  const handleChange=(event:any)=>{
  //  SetValues((prev)=>({
  //   ...prev,
  
  //  })) 
  }

  console.log(values)

  return (
    <>
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form" onSubmit={(e)=>e.preventDefault()} >
          <p>
            <input
              value={values.name}
              // onChange={(event)=>{
              //   storeUserDetails?.SetUserName(event.target.value)
              // }}
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
            <i className="validation">
              <span></span>
              <span></span>
            </i>
          </p>
          <p>
            <input
              value={values.password}
              // onChange={(event)=>{
              //   storeUserDetails?.SetPassword(event.target.value)
              // }}
              onChange={handleChange}
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
            <input type="submit" id="login" onClick={()=>storeUserDetails?.TooglesignUp(false)}/>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
