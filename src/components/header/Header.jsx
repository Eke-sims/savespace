import './header.css'
import headerImg from '../../assets/headerImg.png'

const Header = () => {
  return (
    <section className='section__padding ss__header' id='header'>
      <div className="ss__header_text-container">
        <h1 className="ss__header_text-container_title">
          You Don't Save,<span> We Save!</span> Your Money, Your Terms.
        </h1>
        <p className="ss__header_text-container-text">
          Disrupting the traditional banking sector by offering better financial
          solutions. While staying true to the human values of trust, honesty,
          and fairness. Secure your future with our secure investments.
        </p>
        <button type='button' className='create-account'>Create Free Account</button>
        <div className="ss__header_text-container_store">
          <div className='ss_header_text-container_store-icon'>
            <img src="" alt="store icon" /> <p>Get on Apple</p>
          </div>
          <div className='ss_header_text-container_store-icon'>
            <img src="" alt="store icon" /> <p>Get on Android</p>
          </div>
        </div>
      </div>
      <div className="ss__header_img-container">
        <img src={headerImg} alt="happy lady" />
      </div>
    </section>
  )
}

export default Header