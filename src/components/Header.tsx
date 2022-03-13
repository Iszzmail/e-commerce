import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "../style/Style.css";
import ImageSlider from "../components/ImageSlider"

const Header:React.FC= () => {
  return (
    <>
      <div className={"outline"}>
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
          <Button
            sx={{
              backgroundColor: "rgb(40,116,240);",
              color: "#2874f0",
              height: "46px",
              fontWeight: "500",
              cursor: "pointer",
              borderRadius: "2px",
              padding: "5px 40px",
              marginLeft: "11px",
            }}
            variant="contained"
          // onMouseOver={}
          >
            Login
          </Button>
        </span>
       
      </div>
      {/* <div><ImageSlider/></div> */}
      
    </>
  );
};

export default Header;
