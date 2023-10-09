import { CategoriesSection, Container, Left, Right, Top, Line, List, Items, Loading, Error  } from "./categories.styles";
import {Pageheader} from "../../components";
import { Edit } from "../../assets/svgs";
import {CustomButton, Search} from '../../ui';
import { useCategories } from "../../hooks";
import { useState } from "react";
import {ImSpinner2} from 'react-icons/im'
import { Link } from "react-router-dom";
import { Approutes } from "../../constants";

const Categories = () => {
    const {categoriesData, isLoading, isError, isFetching, error} = useCategories();
    const [selected, setSelected] = useState('');
    const [product, searchProduct] = useState('');

    const filterSubCategories = () => {
        let newCategories = []

        newCategories = categoriesData ? [...categoriesData.data] : []

        newCategories = newCategories.length ? newCategories.filter(cat => {
            return cat.category.name.toLowerCase().indexOf(selected.toLowerCase()) !== -1
        }) : []


        return newCategories[0]?.subCategories
    } 

    const searchProducts = () => {
        let searchedProducts = []

        if(filterSubCategories()){
            searchedProducts = [...filterSubCategories()]
        }

        searchedProducts = searchedProducts?.filter(item => {
            return item.name.toLowerCase().indexOf(product.trim().toLowerCase()) !== -1
        })

        return searchedProducts
    }

    return (  
        <CategoriesSection>
            <Pageheader title='categories' />

            <Container>
                <Left>
                    <Top><p>Category List</p>  <Link to={Approutes.inventory.categories.addcategory}><CustomButton primary='true' left icon='+'>Add Category</CustomButton></Link></Top>

                    <Line></Line>

                    {
                        (!isLoading && !isError) || (!isFetching && !isError) ?
                        <List>
                            {categoriesData?.data.map(cat => {
                                return (
                                    <div key={cat.category._id} className={`${selected === cat.category.name ? 'selected' : ''}`} onClick={() => setSelected(selected === cat.category.name ? '' : cat.category.name)} >
                                        <p>{cat.category.name}</p>
                                        <Edit />
                                    </div>
                                )
                            })}
                        </List>:
                        (isLoading && !isError) || (isFetching && !isError) ?
                        <Loading>
                            <p>Please wait...</p>
                            <ImSpinner2  size={30}/>
                        </Loading> :
                        (!isLoading && isError) || (!isFetching && isError ) ?
                        <Error>
                            <p>{error.response.data.message}</p>
                        </Error> : null
                    }
                </Left>

                <Right>
                    <Top><p>Products</p></Top>

                    <Line></Line>

                    <Search value={product} setValue={searchProduct} placeholder='Search products...' />

                    <Items>
                        {
                            selected && !product ? 
                            filterSubCategories()?.map(sub => {
                                return (
                                    <p key={sub._id}>{sub.name}</p>
                                )
                            }) : selected && product ?
                            searchProducts()?.map(sub => {
                                return (
                                    <p key={sub._id}>{sub.name}</p>
                                )
                            }) : null
                        }
                    </Items>
                </Right>
            </Container>
        </CategoriesSection>
    );
}
 
export default Categories;