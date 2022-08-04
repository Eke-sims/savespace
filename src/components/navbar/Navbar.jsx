import './navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='ss__navbar'>
      <div className="ss__navbar-container">
        <div className='ss__navbar_logo-container'>
          <a href="#header"><img src={Logo} alt="logo" /></a>
        </div>
        <div className="ss__navbar_links-container">
          <p><a href="#header">Home</a></p>
          <p><a href="#header">save</a></p>
          <p><a href="#header">business</a></p>
          <p><a href="#header">blog</a></p>
          <p><a href="#header">contact us</a></p>
        </div>
        <div className="ss__navbar_sign">
          <div className="ss__navbar_sign_log-in">
            Log in
          </div>
          <button type='button'>Create Free Account </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar