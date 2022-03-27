import React from 'react';
import {Product} from './products'

interface PropsProductRender{
    productDetails:Product;
    open:(a:any)=>void
}

function ProductRender(props:PropsProductRender) {

  
    return (
        <span  className={"box"} onClick={() => props.open(props.productDetails)}>
        <img
        className={'lazy'}
          style={{ width: "185px", display: "inline" }}
        data-src={props.productDetails.image}
        />
        <h3 className={"productsName"}>{props.productDetails.title.slice(0, 10)}</h3>
        <span className={"productsName"}>${props.productDetails.price}</span>
        <h3 className={"productsName"}>Rating :{props.productDetails.rating.rate}</h3>
      </span>
    );
}

export default ProductRender;