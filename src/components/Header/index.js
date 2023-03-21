import React from 'react'
import "./style.css"
import logo from "../../assets/img/logo.png"
function Header() {
    return (
        <div className='header center'>
            <div className='header-content center'>
                <div className='logo center'>
                    <img src={logo} />
                    <span>Dough Master</span>
                </div>
                <input type="search" placeholder='Pizza Axtar ...' />
            </div>
        </div>
    )
}

export default Header