/* eslint-disable react/prop-types */
import { useContext } from "react"

import { AuthContext } from "../context/authContext"
import { Navigate } from "react-router-dom"

function ProtectedRoutes({children,allowedRoles}) {
    const {role,token}=useContext(AuthContext)
    //allows a user based on the role
    const isAllowed=allowedRoles.includes(role)
    const accesssibleRoute=token && isAllowed? children:<Navigate to='/login' replace={true}/>
  return accesssibleRoute;
}

export default ProtectedRoutes