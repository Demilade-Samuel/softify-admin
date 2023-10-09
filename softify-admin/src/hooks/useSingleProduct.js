import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchSingleProduct = async (id) => {
    try {
        const response = await axios.get(`https://sofitify-backend.onrender.com/api/admin/products/${id}`, {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        const singleProduct = response.data
    
        return singleProduct       
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
} 

const useSingleProduct = (id) => {
    const { isLoading , data: singleProduct, error, isFetching, isError } = useQuery({
       queryKey : ['singleProductData', id],
       queryFn: () => fetchSingleProduct(id),
       onSuccess: (data) => {
        console.log(`Product ${id} data fetch successful:`, data)
       },
       onError: (error) => {
        console.log(`Product ${id} data fetch failed:`, error)
       },
    })

    return { isLoading, singleProduct, error, isError, isFetching}
}

export default useSingleProduct; 