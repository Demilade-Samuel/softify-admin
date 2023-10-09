import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import {getUserCookie} from '../hooks/useLogin';

const {token} = JSON.parse(getUserCookie('userDetails'))

const addNewVendor = async (vendor) => {
    try{
        const response = await axios.post('https://sofitify-backend.onrender.com/api/admin/business', vendor, {
            headers : {
                // Authorization : `Bearer ${token}`
            }
        })

        const vendorData = response.data

        return vendorData
        
    } catch(err){
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        }else {
            throw err
        }
    }
}

const useNewVendor = () => {
    return useMutation(addNewVendor)
}

export default useNewVendor; 