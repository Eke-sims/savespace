import './application.css'
import features from '../../assets/Group 73.png'

const Application = () => {
  return (
    <section className="section__padding ss__application" id='application'>
      <div className="ss__application_content">
        <h1 className="ss__application_content_title">
          SaveSpace, Your all in one savings application.
        </h1>
        <ul className="ss__application_content_list">
          <li><p>SaveSpace allows you to track your transactions quick and easily.</p></li>
          <li><p>SaveSpace products and services are complete and varies in all segments
            according to users needs.</p></li>
          <li><p>User friendly and easy navigation savings and investments mobile app.</p></li>
        </ul>
        <button className='try-for-free'>Try For Free</button>
      </div>
      <div className="ss__application_img-container">
        <img src={features} alt="features" />
      </div>
    </section>
  )
}

export default Application