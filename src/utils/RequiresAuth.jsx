import { Navigate } from "react-router-dom";

const RequiresAuth=({children})=>
{
    const token = JSON.parse(localStorage.getItem("token"));
    return token ? (
        children
    ) : (
        <Navigate to="/login"/>
    )
}

export default RequiresAuth