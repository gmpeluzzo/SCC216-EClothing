import { simpleStyles as Styles, AddToCartButton, Container, Product, ProductDetailsDiv, Sizes } from "./styles"
import Clothing7 from "../../images/roupa7.jpg"

const ProductDetails = ({product}) => {
  return (
    <Container>
      <Product>
        <img src={Clothing7} alt="roupa7" style={Styles.productImg}/>
        <ProductDetailsDiv>
          <h2 style={Styles.nameH2}>{product.name}</h2>
          <p style={Styles.priceParagraph}>{product.price}</p>
          <p style={Styles.secondParagraph}>Size</p>
          <Sizes>
            <div style={Styles.sizeButton}>P</div>
            <div style={Styles.sizeButton}>M</div>
            <div style={Styles.sizeButton}>G</div>
          </Sizes>
          <p style={Styles.thirdParagraph}>{product.description}</p>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </ProductDetailsDiv>
      </Product>
    </Container>
  )
}

export default ProductDetails