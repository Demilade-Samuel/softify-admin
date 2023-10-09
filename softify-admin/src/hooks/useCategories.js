import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {getUserCookie} from '../hooks/useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const fetchCategoriesData = async () => {
    try {
        const response = await axios.get('https://sofitify-backend.onrender.com/api/admin/category', {
            headers : {
                Authorization : `Bearer ${token}`
            }
        })      

        const categories = response.data

        return categories
    } catch (err) {
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        } else {
            throw err
        }
    }
}

const useCategory = () => {
    const { isLoading, data : categoriesData, error, isError, isFetching, refetch} = useQuery({
       queryKey : ['categoriesData'],
       queryFn: fetchCategoriesData,
       onSuccess: (data) => {
        console.log('Categories data fetch successful:', data)
       },
       onError: (error) => {
        console.log('Categories data fetch failed:', error)
       },
    })

    return { isLoading, categoriesData, error, isError, isFetching, refetch}
}

export default useCategory;