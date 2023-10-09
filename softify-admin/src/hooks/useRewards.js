import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchRewardsData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/rewards', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
        
        const rewards = response.data
    
        return rewards
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useRewards = () => {
    const { isLoading , data: rewardsData, error, isError, isFetching } = useQuery({
       queryKey : ['rewardsData'],
       queryFn: fetchRewardsData,
       onSuccess: (data) => {
        console.log('Rewards data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Rewards data fetch failed:', error)
       },
    })

    return { isLoading, rewardsData, error, isError, isFetching}
}

export default useRewards;