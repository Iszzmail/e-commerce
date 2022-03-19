import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header";
import Products from "./components/products";
import "./style/Style.css";

interface user{
  
    userID: string;
    FirstName: string;
    SecondName: string;
    password: string;
    cart: {};
  }


export const renderHeader = React.createContext<{
  imageRenderValue: boolean;
  imageRenderSetter: (imageRender: boolean) => void;
  itemsInCart: number;
  updatingCard: (cart: number) => void;
  signUp: boolean;
  TooglesignUp: (change: boolean) => void;
  userDetails: {
    userID: string;
    FirstName: string;
    SecondName: string;
    password: string;
    cart: {};
  }[];
  SetuserDetails: (
    details: {
      userID: string;
      FirstName: string;
      SecondName: string;
      password: string;
      cart: {};
    }[]
  ) => void;
  login: boolean;
  ToogleLoginn: (details: boolean) => void;
  currentUser:{
    userID: string;
    FirstName: string;
    SecondName: string;
    password: string;
    cart: {};
  }[];
 
}>({
  imageRenderValue: false,
  imageRenderSetter: (imageRender) => {},
  itemsInCart: 0,
  updatingCard: (cart) => {},
  signUp: false,
  TooglesignUp: (change) => {},
  userDetails: [],
  SetuserDetails: (details) => {},
  login: false,
  ToogleLoginn: (details) => {},
  currentUser:[]
  
});

export const App: React.FC = () => {
  const [imageRender, SetimageRender] = useState<boolean>(true);
  const [cart, Setcart] = useState<number>(0);
  const [ToogleSignUp, SetToogleSignUp] = useState<boolean>(false);
  const [users, Setusers] = useState<
    {
      userID: string;
      FirstName: string;
      SecondName: string;
      password: string;
      cart: {};
    }[]
  >([]);
  const [ToogleLogIn, SetToogleLogIn] = useState<boolean>(false);
  const currentUserDetails=[] as user[]

  return (
    <renderHeader.Provider
      //create a function to avoid repetation
      value={{
        imageRenderValue: imageRender, // to display the value
        imageRenderSetter: (imageRender: boolean) =>
          SetimageRender(imageRender), // to change the value
        itemsInCart: cart,
        updatingCard: (num) => Setcart(num),
        signUp: ToogleSignUp,
        TooglesignUp: SetToogleSignUp,
        userDetails: users,
        SetuserDetails: (details) => Setusers(details),
        login: ToogleLogIn,
        ToogleLoginn: (details) => SetToogleLogIn(details),
        currentUser:currentUserDetails
    
      }}
    >
      <Header />
      <Products />
    </renderHeader.Provider>
  );
};
