// import React from 'react';
// import Slider from "react-slick";
// import { Content, OutsideContainer} from './styles'
// import Clothing1 from '../../images/roupa1.jpg'
// import Clothing2 from '../../images/roupa2.jpg'
// import Clothing3 from '../../images/roupa4.jpg'
// import Clothing4 from '../../images/roupa6.jpg'
// import Clothing5 from '../../images/roupa7.jpg'
// import ModaFeminina from '../../images/ModaFeminina.jpg'
// import ModaMasculina from '../../images/modamasculina.jpg'
// import Infantil from '../../images/modaInfantil.jpeg'
// import ModaCasa from '../../images/modaCasa.jpg'
// import Acessórios from '../../images/acessorios.jpg'




// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const getImages = (imgArray, rounded) => {
//     return imgArray.map(
//         (img) =>
//             <div>   
//                 <Content isRounded={rounded} imgUrl={img}/>
//             </div>
//         );
// }

// const Caroussel = ({rounded}) => {

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         className: 'slider',
//         adaptiveHeight: true,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         arrows: true
//     }

//     const squaredimages = [
//         Clothing1,
//         Clothing2,
//         Clothing3,
//         Clothing4,
//         Clothing5,
//     ]
    
//     const roundedImages = [
//         ModaFeminina,
//         ModaMasculina,
//         Infantil,
//         ModaCasa,
//         Acessórios,
//     ]


//     return (
//         <OutsideContainer>
//             <Slider {...settings}>
//                 {rounded 
//                     ? getImages(roundedImages, rounded) 
//                     : getImages(squaredimages, rounded)
//                 }
//             </Slider>
//         </OutsideContainer>
//     ) 
// }

// export default Caroussel;