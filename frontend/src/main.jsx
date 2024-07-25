import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { AutContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AutContextProvider>
        <ToastContainer theme='dark' position='top-right' autoClose={45500} closeOnClick pauseOnHover={false} />
        <App />
      </AutContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
