import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchShippingOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders/shipped')
        
        const shippingOrders = response.data
    
        return shippingOrders
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useShippedOrders = () => {
    const { isLoading: isShippingOrdersLoading , data: shippingOrdersData, error: shippingOrdersError, isError: isShippedOrdersError, isFetching: isShippedOrdersFetching } = useQuery({
       queryKey : ['shippingOrdersData'],
       queryFn: fetchShippingOrdersData,
       onSuccess: (data) => {
        console.log('Shipped orders data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Shipped orders data fetch failed:', error)
       },
    })

    return { isShippingOrdersLoading, shippingOrdersData, shippingOrdersError, isShippedOrdersError, isShippedOrdersFetching}
}

export default useShippedOrders;