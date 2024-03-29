import { useAuthContext } from "./useAuthContext";


import { signOut } from "firebase/auth"
import { auth } from "../config/firebase.js"



export const useLogout = () => {
    const { dispatch} = useAuthContext();


    const logout = ()=> {
        signOut(auth)
            .then(()=> {
                dispatch({type: 'LOGOUT'})
            })
            .catch((err)=> {
                console.log(err.message);
            })
    }

    return { logout }
}
