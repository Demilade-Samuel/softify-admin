import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { getUserCookie } from './useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchDashboardData = async () => {
    try{
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/dashboard', {
           headers: {
            Authorization: `Bearer ${token}`
        }})

        const dashboard = response.data

        return dashboard
    }catch(err){
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useDashboard = () => {
    const { isLoading, data : dashboardData, error, isError, isFetching } = useQuery({
       queryKey : ['dashboardData'],
       queryFn: fetchDashboardData,
       onSuccess: (data) => {
        console.log('Dashboard data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Dashboard data fetch failed:', error)
       },
    })

    return { isLoading, dashboardData, error, isError, isFetching}
}

export default useDashboard;