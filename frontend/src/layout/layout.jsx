

import Footer from '../layout/footer/Footer'
import Header from '../layout/Header/Header'

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
