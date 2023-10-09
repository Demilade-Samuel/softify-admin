import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchRidersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/rider', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        const riders = response.data
    
        return riders
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useRiders = () => {
    const { isLoading , data: ridersData, error, isError, isFetching } = useQuery({
       queryKey : ['ridersData'],
       queryFn: fetchRidersData,
       onSuccess: (data) => {
        console.log('Riders data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Riders data fetch failed:', error)
       },
    })

    return { isLoading, ridersData, error, isError, isFetching}
}

export default useRiders;