import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/navbar'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Nav menu={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path='/' element={<Home setMenuOpen={setMenuOpen} menu={menuOpen}/>} ></Route>
      </Routes>
    </>
  )
}

export default App
