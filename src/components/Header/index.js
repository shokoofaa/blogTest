import React from 'react'
import {  NavLink } from 'react-router-dom'

function Header(){
    let key='true'
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/' exact >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    {  key &&
                        <NavLink to='/admin'>Admin</NavLink>
                    }
                </li>
            </ul>
            <input placeholder='Search Post'></input>
        </nav>
    )
}
export default Header