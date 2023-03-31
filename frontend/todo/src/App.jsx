import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App