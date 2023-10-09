import { Container, SingleProductSection, Top, TopLeft, TopRight, EditButton, DeleteButton, ProductDetails, ProductDetailsLeft, ProductImage, Dots, Dot, ProductDetailsRight, Name, SP, BrandName, Stock, Categories, Sku, Vendor, ProductDescription, Description, Details, Color, Weight, Dimensions, Measurements, L, B, W, Unit, CostPrice, Loading, ErrorMessage } from "./singleproduct.styles";
import {Pageheader} from "../../../components";
import { Edit, Trash } from "../../../assets/svgs";
import { useParams } from "react-router";
import { useSingleProduct } from "../../../hooks";
import {ImSpinner2} from 'react-icons/im'

const SingleProduct = () => {
    const {productId} = useParams()
    const {singleProduct, isLoading, isFetching, isError, error} = useSingleProduct(productId)

    console.log(singleProduct)

    return (  
        <SingleProductSection>
            <Pageheader title='product page' />
            
            <Container>
                {
                    (!isLoading && !isError) || (!isFetching && !isError) ? 
                    <>
                        <Top>
                            <TopLeft>
                                <h2>{singleProduct?.data.name}</h2>

                            </TopLeft>

                            <TopRight>
                                <EditButton><Edit /> <span>Edit</span></EditButton>
                                <DeleteButton><Trash /> <span>Delete</span></DeleteButton>
                            </TopRight>
                        </Top>

                        <ProductDetails>
                            <ProductDetailsLeft>
                                <ProductImage>
                                    <img src={singleProduct?.data.image} alt="product" />
                                </ProductImage>
                                <Dots>
                                    <Dot active='true'></Dot>
                                    <Dot></Dot>
                                    <Dot></Dot>
                                </Dots>
                            </ProductDetailsLeft>

                            <ProductDetailsRight>
                            <Name>
                                <p>Product Name</p>
                                <div>{singleProduct?.data.name}</div>
                            </Name>
                            <SP>
                                <p>Selling Price</p>
                                <div>₦{singleProduct?.data.price}</div>
                            </SP>
                            <BrandName>
                                <p>Brand Name</p>
                                <div>Nestle</div>
                            </BrandName>
                            <Stock>
                                <p>Stock</p>
                                <div>{singleProduct?.data.quantity}</div>
                            </Stock>
                            <Categories>
                                <p>Category</p>
                                <div>{singleProduct?.data.category ? singleProduct?.data.category.name : 'Frozen food'}</div>
                            </Categories>
                            <Sku>
                                <p>SKU</p>
                                <div>9873H4</div>
                            </Sku>
                            <Vendor>
                                <p>Vendor</p>
                                <div>Nestle</div>
                            </Vendor>


                            </ProductDetailsRight>
                        </ProductDetails>

                        <ProductDescription>
                            <h2>Additional Information</h2>

                            <h4>Product Description</h4>

                            <Description>{singleProduct?.data.description}</Description>
                        </ProductDescription>

                        <Details>
                            <Color>
                                <p>Color</p>
                                <div>Black</div>
                            </Color>

                            <Weight>
                                <p>Weight</p>
                                <div>0.25 <span>KG</span></div>
                            </Weight>

                            <Dimensions>
                                <p>Dimensions</p>

                                <Measurements>
                                    <L><span>Length:</span> 0.32</L>

                                    <B><span>Breadth:</span> 0.32</B>

                                    <W><span>Width:</span> 0.32</W>

                                    <Unit>CM</Unit>
                                </Measurements>
                            </Dimensions>

                            <CostPrice>
                                <p>Cost Price</p>
                                <div>₦29,000</div>
                            </CostPrice>
                        </Details> 
                    </> :
                    (isLoading && !isError) || (isFetching && !isError) ?
                        <Loading>
                            <ImSpinner2 size={30} />
                        </Loading> :
                    (!isLoading && isError) || (!isFetching && isError) ?
                        <ErrorMessage>
                            <p>{error.response.data.message}</p>
                        </ErrorMessage> :
                    null
                }
            </Container>
        </SingleProductSection>
    );
}
 
export default SingleProduct;