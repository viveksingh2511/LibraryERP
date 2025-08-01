import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const closeSidebar = () => {
        document.querySelector('.offcanvas-backdrop')?.remove();
    };
    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebarLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <ul className="nav flex-column">
                    <li className="nav-item"><Link className="nav-link" to="/dashboard" onClick={closeSidebar}>Dashboard</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/books" onClick={closeSidebar}>Books</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/issue" onClick={closeSidebar}>Issue</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/return" onClick={closeSidebar}>Return</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/staff" onClick={closeSidebar}>Staff Management</Link></li>
                </ul>
            </div>
        </div>
    );
}
