import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

function Staff() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="p-3 text-white bg-dark text-start">
        <button type='button' onClick={() => { navigate('/addstaff') }} className='btn btn-info text-white'>Add Employee</button>
      </div>
    </>
  )
}

export default Staff