import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <a href="/">
                <div className="logo">
                    <img src="./img/logo.png" alt="site logo" width={40} height={30} />
                    <span className="logo-text">Cybersoft Cinema</span>
                </div>
            </a>
            <div className=''>
                <Link className='router_link' to="/">Home</Link>
                <Link className='router_link' to="/404">NotFound</Link>
            </div>
        </nav>
    )
}

