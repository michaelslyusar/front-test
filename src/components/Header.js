import React from 'react'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                Home
            </div>
            <div className="header-login-menu">
                <button className="login-menu-button">Login</button>
                <button className="login-menu-button">Register</button>
            </div>
        </div>
    )
}

export default Header;
