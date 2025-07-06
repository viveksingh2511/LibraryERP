import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex">
                    <Link className="navbar-brand col-2" to="/application">Logo</Link>
                    <button className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasSidebar"
                        aria-controls="offcanvasSidebar"><i class="bi bi-list"></i></button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <button className="btn btn-outline-success" onClick={() => { navigate('/') }} type="button">Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header