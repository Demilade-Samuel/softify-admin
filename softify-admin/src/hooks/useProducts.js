import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchProductsData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/products', {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })

        const products = response.data

        return products   
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useProducts = () => {
    const { isLoading: isProductsLoading , data: productsData, error: productsError, isError: isProductsError, isFetching: isProductsFetching } = useQuery({
       queryKey : ['productsData'],
       queryFn: fetchProductsData,
       onSuccess: (data) => {
        console.log('Products data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Products data fetch failed:', error)
       },
    })

    return { isProductsLoading, productsData, productsError, isProductsError, isProductsFetching}
}

export default useProducts;