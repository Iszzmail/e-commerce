import React, { useState } from "react";
import "../style/Style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

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

const CurrentProduct: React.FC<{ a: any }> = (props) => {
  const [current, Setcurrent] = useState<current>();

  return (
    <div>
      <img className={"currentProductImage"} src={props.a.image}></img>
      <Button className={'button'} variant="contained">Add To Cart</Button>
      <button>Buy</button>  
      <span className={"currentProductCategory"}>{props.a.category}</span>
      <span className={"currentProductName"}>
        {props.a.title}{" "}
        <Rating
          name="half-rating"
          defaultValue={props.a.rating.rate}
          precision={0.1}
        />
      </span>

      <span className={"currentProductSpecialPrice"}>Special Price</span>
      <span className={"currentProductPrice"}>${props.a.price}</span>
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
                <h3 style={{ color: "blue" }}>{props.a.description}</h3>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </span>
      </span>
    </div>
  );
};
export default CurrentProduct;
