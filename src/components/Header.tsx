import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "../style/Style.css";
import { renderHeader } from "../App";
import SignUp from "./SignUp";
import Login from "./Login";
import React from "react";
import ImageSlider from './ImageSlider'

const Header: React.FC = () => {
  let contextData = React.useContext(renderHeader);
  
 console.log(contextData)

 const logout=()=>{
   contextData.SetcurrentUser({userID: '',
   FirstName: '',
   SecondName: '',
   password: '',
   cart: []
 })
 contextData.SetIsLoggedIn(false)
 contextData.updatingCard(0)
 }

  const options = () => {
    return (
      <div>
        <h1>ismail</h1>
      </div>
    );
  };

  const search=(e:React.ChangeEvent<HTMLInputElement>)=>{
    contextData.SetSearchedKeyword(e.target.value)
    contextData.SetshowSearchedProduct(true)
    contextData.SetOpenProductPage(false)
  }
  console.log(contextData.showSearchedProduct)
 
  return (
    <>
      {contextData?.signUp && (
        <div className="absolute">
          <SignUp />
        </div>
      )}
      {contextData?.login && (
        <div className="absolute">
          <Login />
        </div>
      )}
      <div>
      
        <div className={"outline"}>
          <span>

            <img
              className={"brandImageSize"} onClick={()=>contextData.SetOpenProductPage(true)}
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            ></img>
          </span>
          <span>
            <Paper
              component="form"
              sx={{
                p: "20px 250px",
                display: "inline",
                alignItems: "left",
                width: 449,
                marginLeft: "11px",
                marginBottom: "14px",
              }}
            >
              <InputBase placeholder="Search for mens, womens and more" 
              onChange={search}
              />
             
            </Paper>
          </span>
         {contextData.isLoggedIn===false? <>

          <span>
            <Button
              onClick={() => contextData?.ToogleLoginn(true)}
              sx={{
                backgroundColor: "white",
                color: "#2874f0",
                height: "46px",
                fontWeight: "500",
                cursor: "pointer",
                borderRadius: "2px",
                padding: "5px 40px",
                border: "1px solid #dbdbdb",
                marginLeft: "11px",
                marginBottom: "px",
              }}
              variant="contained"
            >
              Login
            </Button>
          </span>
          <span>
            <Button
              onClick={() => contextData?.TooglesignUp(true)}
              sx={{
                backgroundColor: "white",
                color: "#2874f0",
                height: "46psx",
                fontWeight: "500",
                cursor: "pointer",
                borderRadius: "2px",
                padding: "5px 40px",
                border: "1px solid #dbdbdb",
                marginLeft: "11px",
                marginBottom: "px",
              }}
              variant="contained"
            >
              Sign up
            </Button>
          </span>
          </>:<span>
            <span>{contextData.currentUser.FirstName} </span>
            <span><Button
              onClick={logout}
              sx={{
                backgroundColor: "white",
                color: "#2874f0",
                height: "46psx",
                fontWeight: "500",
                cursor: "pointer",
                borderRadius: "2px",
                padding: "5px 40px",
                border: "1px solid #dbdbdb",
                marginLeft: "11px",
                marginBottom: "px",
              }}
              variant="contained"
            >
              Log out
            </Button></span>
            </span>}
          </div>
          <span>
            <Button
              sx={{
                backgroundColor: "rgb(40,116,240);",
                color: "white",
                height: "46px",
                fontWeight: "500",
                cursor: "pointer",
                borderRadius: "2px",
                padding: "5px 40px",
                marginLeft: "11px",
              }}
              variant="text"
              onMouseOver={options}
            >
              More
            </Button>
            <Button

            onClick={()=>contextData.SetShowCartPage(true)}
              sx={{
                backgroundColor: "white",
                color: "#2874f0",
                height: "46px",
                fontWeight: "500",
                cursor: "pointer",
                borderRadius: "2px",
                padding: "5px 40px",
                border: "1px solid #dbdbdb",
                marginLeft: "11px",
                marginBottom: "px",
              }}
            >
              {contextData && contextData.currentUser.cart.length}
            </Button>
          </span>
        </div>
        <div>
          {/* {contextData?.imageRenderValue===true? <ImageSlider />:null} */}
        </div>
      </>
   
  );
};

export default Header;
