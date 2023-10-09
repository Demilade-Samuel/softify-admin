import { Container, ProductsSection, Top, Left, Right, Error, Loading } from "./products.styles";
import {Pageheader, ProductsTable} from "../../components";
import {CustomButton, Search} from '../../ui';
import { Link } from "react-router-dom";
import { Approutes } from "../../constants";
import { useProducts } from "../../hooks";
import {ImSpinner2} from 'react-icons/im'
import { useState } from "react";

const Products = () => {
    const { isProductsLoading, isProductsError, productsError, productsData, isProductsFetching } = useProducts()
    const [product, searchProduct] = useState('')

    let products

    products = productsData?.data.map(product => {
        return {
            key: product._id,
            image: product.image,
            productName: product.name,
            brandName: '',
            category: product.category ? product.category.name[0].toUpperCase() + product.category.name.slice(1) : '',
            sku: '',
            price: `₦ ${product.price}`,
            action: ''
        }
    })

    const filterProducts = () => {
        let filteredProducts = []

        if(products){
            filteredProducts = [...products]
        }

        filteredProducts = filteredProducts?.filter(p => {
            return (p.productName.toLowerCase().indexOf(product.trim().toLowerCase()) !== -1) || (p.category.toLowerCase().indexOf(product.trim().toLowerCase()) !== -1) || (p.brandName.toLowerCase().indexOf(product.trim().toLowerCase()) !== -1) || (p.sku.toLowerCase().indexOf(product.trim().toLowerCase()) !== -1) || (p.price.toLowerCase().indexOf(product.trim().toLowerCase()) !== -1)
        })

        return filteredProducts
    }

    return (  
        <ProductsSection>
            <Pageheader title='products' />

            <Container>
                {
                    (!isProductsLoading && !isProductsError) || (!isProductsFetching && !isProductsError) ?
                    <>
                        <Top>
                            <Left>
                                <p>All Products</p>
                            </Left>

                            <Right>

                                <Search placeholder='Search products...' value={product} setValue={searchProduct} />

                                <Link to={Approutes.inventory.products.addnewproduct}><CustomButton primary='true' left icon='+'>add a new product</CustomButton></Link>
                            </Right>
                        </Top>

                        <ProductsTable products={filterProducts()} />
                    </> :
                    (isProductsLoading && !isProductsError) || (isProductsFetching && !isProductsError) ?
                    <Loading>
                        <p>Please wait...</p>
                        <ImSpinner2  size={30}/>
                    </Loading> :
                    (!isProductsLoading && isProductsError) || (!isProductsFetching && isProductsError) ?
                    <Error>
                        <p>{productsError.response.data.message}</p>
                    </Error> : null
                } 
            </Container>
        </ProductsSection>
    );
}
 
export default Products;