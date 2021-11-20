import React from 'react';
import { Container, Text } from './styles';
import Caroussel from '../Caroussel';

const CarousselPage = () => {
    return (
        <Container>
            <Text>
                Welcome to E-Clothing the best clothing e-commerce on the internet.
            </Text>
            <Caroussel/>
        </Container>
    );  
}

export default CarousselPage;