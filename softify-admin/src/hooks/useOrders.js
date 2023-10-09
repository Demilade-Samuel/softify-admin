import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchAllOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
    
        const allOrders = response.data
    
        return allOrders      
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const fetchPendingOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders/pending', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        const pendingOrders = response.data
    
        return pendingOrders
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const fetchCancelledOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders/canceled', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
    
        const cancelledOrders = response.data
    
        return cancelledOrders
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const fetchActiveOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders/active', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        const activeOrders = response.data
    
        return activeOrders
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const fetchDeliveredOrdersData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/orders/delivered', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

        const deliveredOrders = response.data
    
        return deliveredOrders
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useOrders = () => {
    const { isLoading: isAllOrdersLoading, data: allOrdersData, error: allOrdersError, isError: isAllOrdersError, isFetching: isAllOrdersFetching } = useQuery({
       queryKey : ['allOrdersData'],
       queryFn: fetchAllOrdersData,
       onSuccess: (data) => {
        console.log('All orders data fetch successful:', data)
       },
       onError: (error) => {
        console.log('All orders data fetch failed:', error)
       },
    })

    const { isLoading: isPendingOrdersLoading , data: pendingOrdersData, error: pendingOrdersError, isError: isPendingOrdersError, isFetching: isPendingOrdersFetching } = useQuery({
        queryKey : ['pendingOrdersData'],
        queryFn: fetchPendingOrdersData,
        onSuccess: (data) => {
         console.log('Pending orders data fetch successful:', data)
        },
        onError: (error) => {
         console.log('Pending orders data fetch failed:', error)
        },
    })

    const { isLoading: isCancelledOrdersLoading , data: cancelledOrdersData, error: cancelledOrdersError, isError: isCancelledOrdersError, isFetching: isCancelledOrdersFetching } = useQuery({
    queryKey : ['cancelledOrdersData'],
    queryFn: fetchCancelledOrdersData,
    onSuccess: (data) => {
        console.log('Cancelled orders data fetch successful:', data)
    },
    onError: (error) => {
        console.log('Cancelled orders data fetch failed:', error)
    },
    })
 
    const { isLoading: isActiveOrdersLoading , data: activeOrdersData, error: activeOrdersError, isError: isActiveOrdersError, isFetching: isActiveOrdersFetching } = useQuery({
        queryKey : ['activeOrdersData'],
        queryFn: fetchActiveOrdersData,
        onSuccess: (data) => {
         console.log('Active orders data fetch successful:', data)
        },
        onError: (error) => {
         console.log('Active orders data fetch failed:', error)
        },
     })

    const { isLoading: isDeliveredOrdersLoading , data: deliveredOrdersData, error: deliveredOrdersError, isError: isDeliveredOrdersError, isFetching: isDeliveredOrdersFetching } = useQuery({
        queryKey : ['deliveredOrdersData'],
        queryFn: fetchDeliveredOrdersData,
        onSuccess: (data) => {
         console.log('Delivered orders data fetch successful:', data)
        },
        onError: (error) => {
         console.log('Delivered orders data fetch failed:', error)
        },
     })

    return { isAllOrdersLoading, allOrdersData , allOrdersError, isAllOrdersError, isAllOrdersFetching, isPendingOrdersLoading, pendingOrdersData, isPendingOrdersError, pendingOrdersError, isPendingOrdersFetching, isCancelledOrdersLoading, cancelledOrdersData, isCancelledOrdersError, isCancelledOrdersFetching, cancelledOrdersError, isActiveOrdersLoading, isActiveOrdersError, isActiveOrdersFetching, activeOrdersData, activeOrdersError, isDeliveredOrdersFetching, isDeliveredOrdersLoading, deliveredOrdersData, deliveredOrdersError, isDeliveredOrdersError }
}

export default useOrders;