import React, { useEffect, useState, useContext, useRef } from "react";
import "../style/Style.css";
import CurrentProduct from "./currentProduct";
import { renderHeader } from "../App";
import { FaSlidersH } from "react-icons/fa";

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



const Products: React.FC = () => {
  let contextData = React.useContext(renderHeader);

  const [productDetails, SetproductDetails] = useState<Product[]>();
  const [currentProductrender, SetcurrentProductrender] = useState<Product>();
  let arr:Product[]=[]

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => SetproductDetails(res));
  }, []);

  const open = (data: any) => {
    contextData.SetOpenProductPage(false);
    let aa = Object.assign(data);
    SetcurrentProductrender(aa);
    contextData?.imageRenderSetter(false);
  };

  const renderUserCartDetails = () => {
    return contextData.currentUser.cart.map((e) => {
      return (
        <div>
          <h2>{e.title}</h2>
        </div>
      );
    });
  };


  const showSearchedProduct = () => {
    console.log(productDetails)
    productDetails?.map((e) => {
              
      if(e.title.includes(contextData.searchKeyword)){
       return arr.push(e)
      }
      
    })
   return  arr.map((e:Product)=>{
  return <div>
  <img src={e.image}></img>
  </div>
})
  };

let loading:any=[]

const imageObserver = (element:any) => {
  const observer = new IntersectionObserver((e:any) => {
    if(e[0].isIntersecting) {
      e[0].target.src = e[0].target.dataset.src;
      observer.unobserve(element)
    }
  })
  observer.observe(element)
}

useEffect(()=>{
  if(contextData.openProductPage&&productDetails){
    loading=document.querySelectorAll('.lazy')
    if(loading){
      loading.forEach((value:any)=>{
        imageObserver(value)
      })
    }
  }
  
},[contextData.openProductPage,productDetails])

  return (
    <>
      <div>
        {contextData.openProductPage ? (
          productDetails &&
          productDetails.map((e, i) => {
            return (
              <span key={i} className={"box"} onClick={() => open(e)}>
                <img
                className={'lazy'}
                  style={{ width: "185px", display: "inline" }}
                data-src={e.image}
                />
                <h3 className={"productsName"}>{e.title.slice(0, 10)}</h3>
                <span className={"productsName"}>${e.price}</span>
                <h3 className={"productsName"}>Rating :{e.rating.rate}</h3>
              </span>
            );
          })
        ) : contextData.showCartPage ? (
          <div>
            <button onClick={()=>contextData.SetShowCartPage(false)} >back</button>
            {renderUserCartDetails()}</div>
        ) : contextData.showSearchedProduct ? (
          <div>
            {showSearchedProduct()}
          </div>
        ) : (
          <div>
            <button onClick={() => contextData.SetOpenProductPage(true)}>
              Back
            </button>
            <CurrentProduct data={currentProductrender} />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
