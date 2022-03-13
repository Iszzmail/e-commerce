import React, { useEffect, useState } from "react";
import "../style/Style.css";
import CurrentProduct from './currentProduct'

interface Product {
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

interface current{
  id:number
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: string;
  };
  title: string;
}

const  Products:React.FC=(props)=> {
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
   console.log( currentProductrender?.id)
 
  };

  
console.log(currentProductrender)

  return (
    <>
      <div>
        {openProductPage ? (
          productDetails &&
          productDetails.map((e, i) => {
            return (
              <span className={"box"} onClick={() => open(e)}>
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
            <CurrentProduct a={currentProductrender}/>
         </div>
        )}
      </div>
    </>
  );
}

export default Products;
