import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Books() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <div className="p-3 text-white bg-dark">Books Section</div>
    </>
  )
}

export default Books