import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header";
import Products from "./components/products";
import "./style/Style.css";

export const renderHeader = React.createContext<{
    imageRenderValue: boolean;
  imageRenderSetter: (imageRender: boolean) => void;
  image:(image:string)=>void
} | null>(null);



export const App: React.FC = () => {
  const [imageRender, SetimageRender] = useState<boolean>(true);
  const [image,setimage]=useState<string>('hello')

  return (
    <renderHeader.Provider
      value={{
        imageRenderValue: imageRender,
        imageRenderSetter: (imageRender: any) => SetimageRender(imageRender),
        image:(image:any)=>setimage(image)
      }}
    >
      <>
        <Header />
        <Products />
      </>
    </renderHeader.Provider>
  );
};
