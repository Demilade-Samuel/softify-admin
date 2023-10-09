import { Container, StockSection, Cards, Card, Top, Header, TableContainer, Left, Right, EmptyState, LoadingStocks, ErrorStocks, LoadingProducts, ErrorProducts } from "./stock.styles";
import {Pageheader, StockTable} from "../../components";
import { Vehicle, TimedParcelRed, ShopStore } from "../../assets/svgs";
import { Link } from "react-router-dom";
import { Approutes } from "../../constants";
import {CustomButton, Search} from '../../ui';
import { useProducts, useStocks } from "../../hooks";
import {ImSpinner2} from 'react-icons/im'
import { useState } from "react";

const Stock = () => {
    const {stocksData, isError, isFetching, isLoading, error} = useStocks()
    const {productsData, isProductsLoading, isProductsFetching, isProductsError, productsError} = useProducts()
    const [product, searchProduct] = useState('')

    let products

    products = productsData?.data.map(product => {
        return {
            key: product._id,
            image: product.image,
            name: product.name,
            sku: '',
            brand: '',
            category: product.category ? product.category.name[0].toUpperCase() + product.category.name.slice(1) : '',
            price: '₦' + product.price,
            qty: ''
        }
    })


    return (  
        <StockSection>
            <Pageheader title='stock' />

            <Container>
                {
                    (!isLoading && !isError) || (!isFetching && !isError) ?
                    <Cards>
                        <Card color='#FFD700'>
                            <Top>
                                <p>Live Products</p>

                                <div className="green-dot"></div>
                            </Top>

                            <h1>{stocksData?.data.liveProducts}</h1>
                        </Card>
                        <Card color='#CC5500'>
                            <Top>
                                <p>in bound products</p>

                                <Vehicle />
                            </Top>

                            <h1>{stocksData?.data.inBoundProducts}</h1>
                        </Card>
                        <Card color='#3E5F31'>
                            <Top>
                                <p>Low in Stock</p>

                                <TimedParcelRed />
                            </Top>

                            <h1>{stocksData?.data.lowInQuantity}</h1>
                        </Card>
                        <Card color='#BABABA'>
                            <Top>
                                <p>Product Creation</p>

                                <ShopStore />
                            </Top>

                            <h1>+</h1>
                        </Card>
                    </Cards> :
                    (isLoading && !isError) || (isFetching && !isError) ?
                    <LoadingStocks>
                        <p>Please wait...</p>
                        <ImSpinner2  size={30}/>
                    </LoadingStocks> :
                    (!isLoading && isError) || (!isFetching && isError) ?
                    <ErrorStocks>
                        <p>{error.response.data.message}</p>
                    </ErrorStocks> : null
                }

                <Header>
                    <Left>
                        <p>all stock</p>
                    </Left>

                    <Right>
                        <Search placeholder='Search products...' value={product} setValue={searchProduct} />

                        <CustomButton primary='true' left icon='+'>print</CustomButton>
                    </Right>
                </Header>

                <TableContainer>
                    {
                        (!isProductsLoading && !isProductsError) || (!isProductsFetching && !isProductsError) ?
                        (productsData && productsData.length !== 0) ? 
                        <StockTable products={products} />
                        : 
                        <EmptyState>
                            <h2>There are no products in stock</h2>
                            <p>You can add and manage your purchase orders here</p>
                            <Link to={Approutes.inventory.products}><CustomButton>Go to products page</CustomButton></Link>
                        </EmptyState> :
                        (isProductsLoading && !isProductsError) || (isProductsFetching && !isProductsError) ?
                        <LoadingProducts>
                            <ImSpinner2  size={30}/>
                        </LoadingProducts> :
                        <ErrorProducts>
                            <p>{productsError.message}</p>
                        </ErrorProducts>

                    }
                </TableContainer>
            </Container>
        </StockSection>
    );
}
 
export default Stock;