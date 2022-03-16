import React, { useState, useContext } from "react";
import "../style/Style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { renderHeader } from "../App";

interface current {
  id: number;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: string;
  };
  title: string;
}

const CurrentProduct: React.FC<{ data: any }> = (props) => {
 

  const updateCart = React.useContext(renderHeader);

  const AddingToCard = () => {
   updateCart?.updatingCard(updateCart.itemsInCart+1)
  };


  return (
    <div>
      <img className={"currentProductImage"} src={props.data.image}></img>
      <Button onClick={AddingToCard} className={"button"} variant="contained">
        Add To Cart
      </Button>
      <button>Buy</button>
      <span className={"currentProductCategory"}>{props.data.category}</span>
      <span className={"currentProductName"}>
        {props.data.title}{" "}
        <Rating
          name="half-rating"
          defaultValue={props.data.rating.rate}
          precision={0.1}
        />
      </span>

      <span className={"currentProductSpecialPrice"}>Special Price</span>
      <span className={"currentProductPrice"}>${props.data.price}</span>
      <span className={"container"}>
        <span>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h3>Product description</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h3 style={{ color: "blue" }}>{props.data.description}</h3>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </span>
      </span>
    </div>
  );
};
export default CurrentProduct;
