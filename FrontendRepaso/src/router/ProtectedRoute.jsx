import {Navigate} from "react-router-dom"
import { useSelector } from "react-redux";

const ProtectedRoute = ({children, path}) => {

    let user = useSelector(store=>store.userReducer.user);

    if(user){
        return <Navigate to= {path}/>
    } 

    return (
        
        children
    )
}

export default ProtectedRoute