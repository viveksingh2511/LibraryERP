import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid d-flex">
                    <Link className="navbar-brand col-2" to="/dashboard">
                    <img alt='img' src='https://gnpsmt.edunexttechnologies.com/images/nav_icons/library_management.png'/></Link>
                    <button className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSidebar"
                        aria-controls="offcanvasSidebar"><i class="bi bi-list"></i></button>
                    <div className="collapse navbar-collapse justify-content-end pe-3" id="navbarSupportedContent">
                        <button className="btn btn-danger" onClick={() => { navigate('/') }} type="button">Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header