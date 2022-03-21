import React, { useEffect, useState,useContext } from "react";
import "../style/Style.css";
import CurrentProduct from './currentProduct'
import { renderHeader } from "../App";

export interface Product {
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

const  Products:React.FC=()=> {

  let contextData = React.useContext(renderHeader);

  const [productDetails, SetproductDetails] = useState<Product[]>();
  const [openProductPage, setopenProductPage] = useState(true);
  const [currentProductrender, SetcurrentProductrender] = useState<Product>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => SetproductDetails(res));
  }, []);


  const open = (data:any) => {
    setopenProductPage(false);
    let aa = Object.assign(data)
    SetcurrentProductrender(aa)
 contextData?.imageRenderSetter(false)

  };

  

  return (
    <>
      <div>
   
        {openProductPage ? (
          productDetails &&
          productDetails.map((e, i) => {
            return (
              <span key={i} className={"box"} onClick={() => open(e)}>
                <img
                  style={{ width: "185px", display: "inline" }}
                  src={e.image}
                />
                 <h3 className={"productsName"}>{e.title.slice(0, 10)}</h3>
                <span className={"productsName"}>${e.price}</span>
                <h3 className={"productsName"}>Rating :{e.rating.rate}</h3>
                <button>Buy</button>
              </span>
            );
          })
        ) : (
          <div>
            <CurrentProduct data={currentProductrender}/>
         </div>
        )}
      </div>
    </>
  );
}

export default Products;
