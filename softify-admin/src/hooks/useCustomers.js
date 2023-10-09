import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchCustomersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/customers', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        const customers = response.data
    
        return customers
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useCustomers = () => {
    const { isLoading, data : customersData, error, isError, isFetching} = useQuery({
       queryKey : ['customersData'],
       queryFn: fetchCustomersData,
       onSuccess: (data) => {
        console.log('Customers data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Customers data fetch failed:', error)
       },
    })

    return { isLoading, customersData, error, isError, isFetching}
}

export default useCustomers;