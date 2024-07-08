
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetail from '../pages/Doctors/DoctorsDetail'
import {Routes,Route} from 'react-router-dom'
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
  </Routes>
}

export default Router