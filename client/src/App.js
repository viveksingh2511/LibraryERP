import React from 'react'
import MyLogin from './components/MyLogin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import Books from './components/Books';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyLogin/>}></Route>
        <Route path='/dashboard' element={<WelcomePage/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App