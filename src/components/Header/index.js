import React from 'react'
import "./style.css"
import logo from "../../assets/img/logo.png"
import { Search } from '../Search'
function Header() {
    return (
        <div className='header center'>
            <div className='header-content center'>
                <div className='logo center'>
                    <img src={logo} alt="logo" />
                    <span>Dough Master</span>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Header