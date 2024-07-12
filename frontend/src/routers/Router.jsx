
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetail from '../pages/Doctors/DoctorsDetail'
import {Routes,Route} from 'react-router-dom'
import Myaccount from '../Dashboard/UserAccout/Myaccount'
import Dashboard from '../Dashboard/DoctorAccount/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'
function Router() {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/doctors/:id' element={<DoctorDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contacts' element={<Contact/>}/>
    <Route path='/users/profile/me' element= {<ProtectedRoutes allowedRoles={['patient']} ><Myaccount/> </ProtectedRoutes>}/>
    <Route path='/doctors/profile/me' element={<ProtectedRoutes allowedRoles={['doctor']}>
    <Dashboard/> 
    </ProtectedRoutes>}/>
  </Routes>

}

export default Router