    import React from 'react'
    import Header from './Header'
    import Sidebar from './Sidebar'

    function WelcomePage() {
        return (
            <>
                <Header/>
                <Sidebar/>
                <div className="p-3 text-white bg-dark">Welcome to Dashboard</div>
            </>
        )
    }

    export default WelcomePage