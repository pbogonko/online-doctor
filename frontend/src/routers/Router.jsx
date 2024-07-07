
import Home from '../components/pages/Home'
import Services from '../components/pages/Services'
import Login from '../components/pages/Login'
import Signup from '../components/pages/Signup'
import Contact from '../components/pages/Contact'
import Doctors from '../components/pages/Doctors/Doctors'
import DoctorDetail from '../components/pages/Doctors/DoctorsDetail'
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