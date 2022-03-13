import React ,{ createContext,useContext, useState } from 'react';
import Header from './components/Header';
import Products from './components/products';
import './style/Style.css'

interface context {
    a: ()=>{
        
    }
}




const  App:React.FC=()=> {


    return (<>
           <Header/>         
           <Products/>
 </>
    );
}

export default App;