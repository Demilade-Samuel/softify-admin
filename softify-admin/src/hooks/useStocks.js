import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchStocksData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/stocks/info', {
            headers : {
                Authorization: `Bearer ${token}`
            }
        })

        const stocks = response.data
    
        return stocks
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useStocks = () => {
    const { isLoading , data: stocksData, error, isError, isFetching } = useQuery({
       queryKey : ['stocksData'],
       queryFn: fetchStocksData,
       onSuccess: (data) => {
        console.log('Stocks data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Stocks data fetch failed:', error)
       },
    })

    return { isLoading, stocksData, error, isError, isFetching}
}

export default useStocks;