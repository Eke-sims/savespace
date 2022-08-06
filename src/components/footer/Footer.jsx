import './footer.css'
import logo from '../../assets/logo white.png'
import facebook from '../../assets/facebookIcon.png'
import twitter from '../../assets/twitterIcon.png'
import instagram from '../../assets/InstagramIcon.png'
import love from '../../assets/fxemoji_beating-heart.png'

const Footer = () => {
  return (
    <footer className='section__padding ss__footer' id='footer'>
      <div className="ss__footer_links-container">
        <div className='ss__footer_link-section logo-section'>
          <img src={logo} alt="logo" className="ss__footer_logo" />
          <p>SaveSpace is the world largest and most secure digital savings service</p>
          <div className="ss__footer_social-link-container">
            <img src={facebook} alt="facebook icon" />
            <img src={twitter} alt="Twitter icon" />
            <img src={instagram} alt="Instagram icon" />
          </div>
        </div>
        <div className='ss__footer_link-section'>
          <h4 className="ss__footer_links-header">Company</h4>
          <ul className="ss__footer_link">
            <li>Career</li>
            <li>SaveSpace blog</li>
            <li>Press</li>
            <li>Our story</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='ss__footer_link-section'>
          <h4 className="ss__footer_links-header">Product</h4>
          <ul className="ss__footer_link">
            <li>Features</li>
            <li>What's New?</li>
            <li>Coming Soon</li>
            <li>SaveSpace Guide</li>
          </ul>
        </div>
        <div className='ss__footer_link-section'>
          <h4 className="ss__footer_links-header">Resources</h4>
          <ul className="ss__footer_link">
            <li>Forum</li>
            <li>SaveSpace Community</li>
            <li>Events</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className='ss__footer_link-section'>
          <h4 className="ss__footer_links-header">About</h4>
          <ul className="ss__footer_link">
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Privacy Policies</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="ss__footer_copy">
        <p className="ss__footer_copy-text">© 2022 SaveSpace - Made with<img src={love} alt="love emoji" /></p>
      </div>
    </footer>
  )
}

export default Footer