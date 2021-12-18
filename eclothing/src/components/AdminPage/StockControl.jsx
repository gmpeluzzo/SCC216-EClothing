import { useContext } from "react"
import { Link } from 'react-router-dom';
import ShopContext from "../Context/shop-context";
import { MediumText, ProdForm, ProdName, ProdRemove, SmallText, ManagementWrapper, ProdImg, StockControl, BigText, AddButton, SelectImage, InfoDiv, ManagementHeader, AdminButton, InfoContent, AdminInfo, InfoLabel } from "./styles";

const ProductControl = (props) => {
    const { image, name, price } = props.product;

    return (
        <ProdForm>
            <ProdName>{name}</ProdName>
            <SmallText type="text" placeholder='10'/>
            <MediumText type="text" placeholder={price}/>
            <ProdImg src={image}/>
            <SmallText type="text" placeholder="0%"/>
            <ProdRemove type="button" value="X"/>
        </ProdForm>
    );
}

const AddProduct = () => {
    const selectImageHandler = () => {
        document.querySelector('.selectImage').click()
    }

    return (
        <ProdForm>
            <BigText type="text" placeholder="Nome do Produto"/>
            <SmallText type="text" placeholder='10'/>
            <MediumText type="text" placeholder={'$123.00'}/>
            <SelectImage type="button" value="Select" onClick={selectImageHandler}/>
            <SmallText type="text" placeholder="0%"/>
            <AddButton type="submit" value="Add"/>
            <input class="selectImage" type="file" hidden/>
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
            <StockControl>
                {productsArray.map(product => <ProductControl product={product}/>)}
            </StockControl>
            <AddProduct/>
        </ManagementWrapper>
    )
}

const AdminPage = () => {

    return (
        <div>
            <AdminButton style={{top: '15%'}}>Update Stock</AdminButton>
            <AdminButton style={{top: '25%'}}>Back To Store</AdminButton>
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