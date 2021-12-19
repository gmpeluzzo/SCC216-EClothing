import { useContext, useState } from "react"
import { Link } from 'react-router-dom';
import ShopContext from "../Context/shop-context";
import { MediumText, ProdForm, ProdName, ProdUpdate, SmallText, ManagementWrapper, ProdImg, StockControl, BigText, AddButton, SelectImage, InfoDiv, ManagementHeader, AdminButton, InfoContent, AdminInfo, InfoLabel } from "./styles";
import styled from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;
`

const ProductControl = (props) => {
    const { image, name, price, quantity, id } = props.product;
    const [inStock, setInStock] = useState(quantity)
    const [preco, setPreco] = useState(price)

    const handleClick = (productId) => {
        fetch(`http://localhost:9000/products/update/ + ${productId}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({price: preco, quantity: inStock})
        })
          .then(response => response.json())
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
      }

    return (
        <ProdForm>
            <ProdName>{name}</ProdName>
            <SmallText type="text" placeholder={quantity} onChange={e => setInStock(e.target.value)}/>
            <MediumText type="text" placeholder={price} onChange={e => setPreco(e.target.value)}/>
            <ProdImg src={image}/>
            <SmallText type="text" placeholder="0%"/>
            <ProdUpdate onClick={() => handleClick(id)}>Update</ProdUpdate>
        </ProdForm>
    );
}

const AddProduct = () => {
    const selectImageHandler = () => {
        document.querySelector('.selectImage').value = window.prompt('\nInsert image URL\n\n')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProductInfo = {}
        let formattedProduct = {}

        for (var input in event.target){
            !input.match(/\D/) && event.target[input].value && (newProductInfo[input] = event.target[input].value)
        }

        formattedProduct = {
            name: newProductInfo['0'],
            quantity: newProductInfo['1'],
            price: newProductInfo['2'],
            image: newProductInfo['6'],
        }

        fetch(`http://localhost:9000/products/add`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({formattedProduct})
        })
        .then(response => response.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }

    return (
        <ProdForm onSubmit={handleSubmit}>
            <BigText type="text" placeholder="Nome do Produto" required/>
            <SmallText type="text" placeholder='10' required/>
            <MediumText type="text" placeholder={'$123.00'} required/>
            <SelectImage type="button" value="Select" onClick={selectImageHandler}/>
            <SmallText type="text" placeholder="0%"/>
            <AddButton type="submit" value="Add"/>
            <input className="selectImage" type="text" hidden required/>
        </ProdForm>
    );
}

const ProdManagement = () => {
    const { products } = useContext(ShopContext);
    const productsArray = [];

    for (var product in products){
        productsArray.push(products[product])
    }

    return (
        <ManagementWrapper>
            <div>
                <h2>Stock Management</h2>
            </div>
            <ManagementHeader>
                <span>Product Name</span>
                <span style={{padding: '0 0 0 4%'}}>In Stock</span>
                <span style={{padding: '0 6% 0 6%'}}>Price</span>
                <span>Image</span>
                <span>Discount</span>
                <span>Remove</span>
            </ManagementHeader>
            <StockControl className={'existingproducts'}>
                {productsArray.map((product, index) => <ProductControl product={product} key={index}/>)}
            </StockControl>
            <AddProduct/>
        </ManagementWrapper>
    )
}

const AdminPage = () => {

    return (
        <div>
            <AdminButton style={{top: '15%'}}>Update Stock</AdminButton>
            <StyledLink to={'/carousel'}>
                <AdminButton style={{top: '25%'}}>Back To Store</AdminButton>
            </StyledLink>
            <AdminInfo>
                <InfoDiv>
                    <InfoLabel>Name:</InfoLabel>
                    <InfoContent>Dilvan</InfoContent>
                </InfoDiv>
                <InfoDiv>
                    <InfoLabel>ID:</InfoLabel>
                    <InfoContent>0219</InfoContent>
                </InfoDiv>
                <InfoDiv>
                    <InfoLabel>Phone:</InfoLabel>
                    <InfoContent>16 988887777</InfoContent>
                </InfoDiv>
                <InfoDiv>
                    <InfoLabel>Email:</InfoLabel>
                    <InfoContent>dilvan@icmc.usp.br</InfoContent>
                </InfoDiv>
            </AdminInfo>
            <ProdManagement/>
        </div>
    )
}

export default AdminPage;