import {useMutation} from '@tanstack/react-query';
import { useAuthContext} from "../hooks";
import { useNavigate } from 'react-router-dom';
import { deleteUserCookie } from './useLogin';

const logoutUser = async () => {
    deleteUserCookie()
}


const useLogout = () => {
    const {setUser, setAuthenticated} = useAuthContext()
    const navigate = useNavigate();

    const {mutate, isLoading, error} = useMutation(
        logoutUser, 
        {
        onSuccess: () => {
            setUser(null)
            setAuthenticated(false)
            navigate('/login')
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return {mutate, isLoading, error}
}

export default useLogout;