import React, { useEffect, useState } from 'react';




function Products() {
    const [productDetails,SetproductDetails]=useState()

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>SetproductDetails(res))
},[])
 
  
    console.log(productDetails)   
    return (
        <>
          <div>
        <img/>      
        </div>  
        </>
    );
}

export default Products