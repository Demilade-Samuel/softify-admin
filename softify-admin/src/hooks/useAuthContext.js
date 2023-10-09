import { AuthContext } from "../context";
import { useContext } from "react";

const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuthContext must be inside and AuthContextProvider')
    }

    return context
}

export default useAuthContext;