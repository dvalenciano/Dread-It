import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  
  return(
    <header>
      <nav className="nav-bar">

        <section className='left-nav'>
        <NavLink to='/'>DreadIt</NavLink>
        </section>

        <section className='right-nav'>
        <NavLink to='/soccer'>Soccer</NavLink>
        <NavLink to='/football'>Football</NavLink>
        <NavLink to='/boxing'>Boxing</NavLink>
        </section>

      </nav>
    </header>
    
  )
}

export default NavBar