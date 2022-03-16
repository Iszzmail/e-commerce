import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "../style/Style.css";
import ImageSlider from "../components/ImageSlider";
import { useState,useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import { renderHeader } from "../App";
import SignUp from "./SignUp";

const Header: React.FC = () => {
  let contextData = React.useContext(renderHeader);
  console.log(contextData)




  const options = () => {
    
    return (
      // <div>
      //   {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      //   <Select
      //     labelId="demo-simple-select-label"
      //     id="demo-simple-select"
      //     value={1}
      //     label="Age"
      //   >
      //     <MenuItem value={10}>Ten</MenuItem>
      //     <MenuItem value={20}>Twenty</MenuItem>
      //     <MenuItem value={30}>Thirty</MenuItem>
      //   </Select>
      // </div>
      <div>
        <h1>ismail</h1>
      </div>
    );

    
  };
  return (
    <>

       {contextData?.signUp===true?<SignUp/> :<> <div className={"outline"}>
        <span>
          <img
            className={"brandImageSize"}
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
            <InputBase placeholder="Search for products, brands and more" />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </span>
        <span>
          <Button
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
          <Button onClick={()=>contextData?.TooglesignUp(true)}
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
          <Button sx={{
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
            }}>{contextData&&contextData.itemsInCart}</Button>
        </span>

      </div>
    <div>
      {contextData?.imageRenderValue===true? <ImageSlider />:null}
         
      </div>
      </>
}
    </>
  );
};

export default Header;
