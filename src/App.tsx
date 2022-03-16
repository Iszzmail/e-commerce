import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header";
import Products from "./components/products";
import "./style/Style.css";

export const renderHeader = React.createContext<{
  imageRenderValue: boolean;
  imageRenderSetter: (imageRender: boolean) => void;
  itemsInCart: number;
  updatingCard: (cart: number) => void;
  signUp: boolean;
  TooglesignUp: (change: boolean) => void;
  UserName: string;
  SetUserName: (name: string) => void;
  password: string;
  SetPassword: (name: string) => void;
} | null>(null);

export const App: React.FC = () => {
  const [imageRender, SetimageRender] = useState<boolean>(true);
  const [cart, Setcart] = useState<number>(0);
  const [ToogleSignUp, SetToogleSignUp] = useState<boolean>(false);
  const [name, SetName] = useState<string>("");
  const [userPassword, SetuserPassword] = useState<string>("");

  return (
    <renderHeader.Provider
      //create a function to avoid repetation
      value={{
        imageRenderValue: imageRender, // to display the value
        imageRenderSetter: (imageRender: any) => SetimageRender(imageRender), // to change the value
        itemsInCart: cart,
        updatingCard: (num: any) => Setcart(num),
        signUp: ToogleSignUp,
        TooglesignUp: (change) => SetToogleSignUp(change),
        UserName: name,
        SetUserName: SetName,
        password: userPassword,
        SetPassword: (change) => SetuserPassword(change),
      }}
    >
      <>
        {ToogleSignUp === false ? (
          <>
            <Header />
            <Products />
          </>
        ) : (
          <Header />
        )}
      </>
    </renderHeader.Provider>
  );
};
