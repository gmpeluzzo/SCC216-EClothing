import styled from 'styled-components';
import LeftArrow from '../../images/left-arrow.svg';
import RightArrow from '../../images/right-arrow.svg';

export const OutsideContainer = styled.div`
    width: 85%;
    margin: 0 auto;
    .slick-slide {
        outline: none;
        display: flex;
        justify-content: center;
    }

    & .slick-list {
        margin: 25px;
    }

    & .slick-next:before {
        color: transparent;
    }

    & .slick-prev:before  {
        color: transparent;
    }

    & .slick-arrow.slick-prev {
        width: 60px;
        height: 100px;
        background-image: url(${LeftArrow});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100px;
    }

    & .slick-arrow.slick-next {
        width: 60px;
        height: 1000px;
        background-image: url(${RightArrow});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100px;
    }

    & .slick-slide.slick-active > div > div {
        outline: none;
        box-sizing: border-box;
    }

    & .slick-slide.slick-active > div > div:hover {
        border: 1px solid #969FAA;
    }
`;

export const Container = styled.div`
    height: 50px;
    width: 100px;
    
`

export const Content = styled.div`
    width: 187px;
    height: 187px;
    border-radius: ${props => props.isRounded ? '50%' : '0'};
    background-color: white;
    background-image: url(${props => props.imgUrl});
    background-position: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    outline: none;
`;