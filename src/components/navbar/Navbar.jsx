import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <nav className='ss__navbar'>
      <div className="ss__navbar-container">
        <div className='ss__navbar_logo-container'>
          <a href="#header"><img src={Logo} alt="logo" /></a>
        </div>
        <div className="ss__navbar_links-container">
          <p><a href="#header">Home</a></p>
          <p><a href="#journey">save</a></p>
          <p><a href="#application">business</a></p>
          <p><a href="#goals">blog</a></p>
          <p><a href="#footer">contact us</a></p>
        </div>
        <div className="ss__navbar_sign">
          <div className="ss__navbar_sign_log-in">
            Log in
          </div>
          <button type='button'>Create Free Account </button>
        </div>
        <div className="ss__navbar_menu">
          {toggleMenu 
          ? <RiCloseLine color='#0247fe' size={27} onClick={ () => setToggleMenu(false)} /> 
          : <RiMenu3Line color='#0247fe' size={27} onClick={ () => setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className='ss__navbar_menu_container'>
                <div className="ss__navbar_menu_container-links">
                  <p><a href="#header">Home</a></p>
                  <p><a href="#journey">save</a></p>
                  <p><a href="#application">business</a></p>
                  <p><a href="#goals">blog</a></p>
                  <p><a href="#footer">contact us</a></p>
                  <div className="ss__navbar_menu_container-links_sign">
                    <div className="ss__navbar_menu_container-links_sign_log-in">
                      Sign in
                    </div>
                    <button type='button'>Sign Up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar