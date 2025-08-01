import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Return() {
  return (
    <>
                <Header/>
                <Sidebar/>
                <div className="p-3 text-white bg-dark">Welcome to Return Page</div>
            </>
  )
}

export default Return