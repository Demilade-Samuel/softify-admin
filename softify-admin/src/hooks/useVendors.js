import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchVendorsData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/business', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

        const vendors = response.data
    
        return vendors       
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useVendors = () => {
    const { isLoading, data : vendorsData, error, isError, isFetching } = useQuery({
       queryKey : ['vendorsData'],
       queryFn: fetchVendorsData,
       onSuccess: (data) => {
        console.log('Vendors data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Vendors data fetch failed:', error)
       },
    })

    return { isLoading, vendorsData, error, isError, isFetching}
}

export default useVendors;