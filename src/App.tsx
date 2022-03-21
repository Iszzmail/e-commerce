import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header";
import Products, { Product } from "./components/products";
import "./style/Style.css";

interface user {
  userID: string;
  FirstName: string;
  SecondName: string;
  password: string;
  cart: Array<Product>;
}

export const renderHeader = React.createContext<{
  imageRenderValue: boolean;
  imageRenderSetter: (imageRender: boolean) => void;
  itemsInCart: number;
  updatingCard: (cart: number) => void;
  signUp: boolean;
  TooglesignUp: (change: boolean) => void;
  userDetails: Array<user>;
  SetuserDetails: (
    details:Array<user>
  ) => void;
  login: boolean;
  ToogleLoginn: (details: boolean) => void;
  currentUser: user
  SetcurrentUser: (current:user) => void;
  isLoggedIn: boolean;
  SetIsLoggedIn: (change: boolean) => void;
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
  currentUser: {
    userID: "",
    FirstName: "",
    SecondName: "",
    password: "",
    cart: [],
  },
  SetcurrentUser: (current) => {},
  isLoggedIn: false,
  SetIsLoggedIn: (change: boolean) => {},
});

export const App: React.FC = () => {
  const [imageRender, SetimageRender] = useState<boolean>(true);
  const [cart, Setcart] = useState<number>(0);
  const [ToogleSignUp, SetToogleSignUp] = useState<boolean>(false);
  const [users, Setusers] = useState<Array<user>>([]);
  const [ToogleLogIn, SetToogleLogIn] = useState<boolean>(false);

  const [isLoggedIn, SetIsloggedIn] = useState<boolean>(false);
  const [currentUser, SetcurrentUser] = useState<user>({
    userID: "",
    FirstName: "",
    SecondName: "",
    password: "",
    cart: [],
  });

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
        currentUser: currentUser,
        SetcurrentUser: (user) => SetcurrentUser(user),
        isLoggedIn: isLoggedIn,
        SetIsLoggedIn: (change) => SetIsloggedIn(change),
      }}
    >
      <Header />
      <Products />
    </renderHeader.Provider>
  );
};
