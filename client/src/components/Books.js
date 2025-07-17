import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

function Books() {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="p-3 text-white bg-dark text-end">
      <button type='button' onClick={()=>{navigate('/addbook')}} className='btn btn-info text-white'>Add Books</button>
    </div>
    </>
  )
}

export default Books