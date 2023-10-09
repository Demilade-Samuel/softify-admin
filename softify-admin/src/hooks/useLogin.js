import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import { useAuthContext} from "../hooks";

const loginUser = async (userDetails) => {
    try{
        const response = await axios.post('https://sofitify-backend.onrender.com/api/admin/login', userDetails)

        const userData = response.data

        return userData
    } catch(err){
        if(err.message === 'Network Error'){
            throw new Error('Network error: Please check internet connection')
        }else {
            throw err
        }
    }
  
}

export const setUserCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
};

export const getUserCookie = (name) => {
    const cookieValue = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    );
    return cookieValue ? cookieValue[2] : null;
};

export const deleteUserCookie = () => {
    setUserCookie('userDetails', '', -1);
};

const useLogin = () => {
    const {setUser, setAuthenticated} = useAuthContext()

    const {mutate, isLoading, error, status} = useMutation(
        loginUser,
        {
            onSuccess: (data) => {
                setUserCookie('userDetails', JSON.stringify({
                    email: data.data.email,
                    username: data.data.userName,
                    role: data.data.role,
                    authenticated: true,
                    token: data.token
                }))
                setUser(JSON.parse(getUserCookie('userDetails')))
                setAuthenticated(true)
            }, 
            onError: (err) => {
                console.log(err)
            }
        })

    return {mutate, isLoading, error, status}
}

export default useLogin; 