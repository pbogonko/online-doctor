
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Router from '../routers/Router'


function Layout() {
  return (
    <>
    <Header/>
    <main>
    
      <Router/>
     
    </main>
    <Footer/>
    </>
  )
}

export default Layout
