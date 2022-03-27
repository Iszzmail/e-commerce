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

  const Updatecartinfo = [...updateCart.userDetails];

  const AddingToCardNotLoggedIn = () => {
    updateCart?.ToogleLoginn(true);
  };

  // let position: number;
  // const findUser = () => {
  //   let name = updateCart.currentUser.FirstName;
  //   console.log(name);
  //   updateCart.userDetails.map((e, i) => {
  //     if (e.FirstName === name) {
  //       position = i;
  //     }
  //   });
  //   console.log(position);
  //   let cart = updateCart.currentUser.cart;
  //   console.log(cart);
  //   Updatecartinfo[position].cart = [...Updatecartinfo[position].cart, cart];
  // };

  const AddingToCardLoggedIn = () => {
    updateCart?.updatingCard(updateCart.itemsInCart + 1);
    updateCart.SetcurrentUser({
      ...updateCart.currentUser,
      cart: [...updateCart.currentUser.cart, props.data],
    });
    // updateCart.SetuserDetails(Updatecartinfo)
    updateCart.SetuserDetails(
      updateCart.userDetails.map((data) => {
        if (data.userID === updateCart.currentUser.userID) {
          return {
            ...data,
            cart: [...data.cart, props.data],
          };
        } else {
          return data;
        }
      })
    );
    console.log(updateCart.userDetails);
  };

  return (
    <div>
      <img className={"currentProductImage"} src={props.data.image}></img>
      {updateCart.isLoggedIn ? (
        <Button
          onClick={AddingToCardLoggedIn}
          className={"button"}
          variant="contained"
        >
          Add To Cart
        </Button>
      ) : (
        <Button
          onClick={AddingToCardNotLoggedIn}
          className={"button"}
          variant="contained"
        >
          Add To Cart
        </Button>
      )}
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
