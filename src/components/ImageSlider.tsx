import "../style/Style.css";
import React, { useState } from "react";
import { images } from "../data";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { isGeneratorFunction } from "util/types";

// interface productDetails{

// }
const  ImageSlider:React.FC=()=> {
  let [currentImage, SetcurrentImage] = useState<number>(0);
  const [productDetails,SetproductDetails]=useState<[{}]>()
  const PrevNextImages = (e: string) => {
    if (e === "next") {
      if (currentImage < images.length - 1) {
        SetcurrentImage((currentImage + 1));
      } else {
        SetcurrentImage(0);
      }
      return null;
    } else if (e === "prev") {
      if(currentImage===0){
        SetcurrentImage(images.length-1)
      }
     else if (currentImage <= images.length - 1) {
        SetcurrentImage((currentImage - 1));
      } 
    }
    return null;
  };


  return (
    <>
      <section className="slider">
        <ArrowBackIosNewIcon onClick={() => PrevNextImages("prev")} />
        <img src={images[currentImage]} className="image" />
        <ArrowForwardIosIcon onClick={() => PrevNextImages("next")} />
      </section>
    </>
  );
}

export default ImageSlider;
