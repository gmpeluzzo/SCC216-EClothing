import React, { useContext, useEffect, useMemo } from "react";
import ShopContext from "../Context/shop-context";
import Slider from "react-slick";
import { Content, OutsideContainer } from "./styles";
import Clothing1 from "../../images/roupa1.jpg";
import Clothing2 from "../../images/roupa2.jpg";
import Clothing3 from "../../images/roupa4.jpg";
import Clothing4 from "../../images/roupa6.jpg";
import Clothing5 from "../../images/roupa7.jpg";
import ModaFeminina from "../../images/ModaFeminina.jpg";
import ModaMasculina from "../../images/modamasculina.jpg";
import Infantil from "../../images/modaInfantil.jpeg";
import ModaCasa from "../../images/modaCasa.jpg";
import Acessórios from "../../images/acessorios.jpg";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getImages = (productsArray) => {
	
  return productsArray.map((item) => (
    <div>
      <Link to={"/product/" + item.id}>
        <Content isRounded={false} imgUrl={item.image} />
      </Link>
    </div>
  ));
};

const Caroussel = ({ rounded }) => {
  const { products } = useContext(ShopContext);
	const productsArray = useMemo(() => Object.values(products), [products])
	console.log(productsArray, 'productsarray')
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    className: "slider",
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
	};

  return (
    <OutsideContainer>
      <Slider {...settings}>{getImages(productsArray)}</Slider>
    </OutsideContainer>
  );
};

export default Caroussel;
