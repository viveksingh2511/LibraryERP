import React from 'react'
import MyLogin from './components/MyLogin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import Books from './components/Books';
import IssueReturn from './components/Issue-Return';
import Staff from './components/Staff';
import Addbook from './components/Addbook';
import Editbook from './components/Editbook';
import Addstaff from './components/Addstaff';
import ViewBook from './components/ViewBook';
import Return from './components/Return';
import EditStaff from './components/EditStaff';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyLogin/>}></Route>
        <Route path='/dashboard' element={<WelcomePage/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/issue' element={<IssueReturn/>}></Route>
        <Route path='/return' element={<Return/>}></Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/addbook' element={<Addbook/>}></Route>
        <Route path='/addstaff' element={<Addstaff/>}></Route>
        <Route path='/staff/editstaff/:id' element={<EditStaff/>}></Route>
        <Route path='/books/editbook/:id' element={<Editbook/>}></Route>
        <Route path='/books/viewbook/:id' element={<ViewBook/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App