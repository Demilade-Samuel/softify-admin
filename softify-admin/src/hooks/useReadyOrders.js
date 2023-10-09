import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchReadyOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders/ready')
        
        const readyOrders = response.data
    
        return readyOrders  
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useReadyOrders = () => {
    const { isLoading: isReadyOrdersLoading , data: readyOrdersData, error: readyOrdersError, isError: isReadyOrdersError, isFetching: isReadyOrdersFetching } = useQuery({
       queryKey : ['readyOrdersData'],
       queryFn: fetchReadyOrdersData,
       onSuccess: (data) => {
        console.log('Ready orders data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Ready orders data fetch failed:', error)
       },
    })

    return { isReadyOrdersLoading, readyOrdersData, readyOrdersError, isReadyOrdersError, isReadyOrdersFetching}
}

export default useReadyOrders;