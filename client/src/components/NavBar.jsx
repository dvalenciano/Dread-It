import React from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return(
    <header>
      <nav className="nav-bar">
        <NavLink to='/'>DreadIt</NavLink>
        <NavLink to='/soccer'>Soccer</NavLink>
        <NavLink to='/football'>Football</NavLink>
        <NavLink to='/boxing'>Boxing</NavLink>
      </nav>
    </header>
    
  )
}