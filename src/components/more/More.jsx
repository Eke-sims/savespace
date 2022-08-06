import './more.css'
import girl from '../../assets/girlImg.png'

const More = () => {
  return (
    <section className="section__padding ss__more">
      <div className="ss__more_image-container">
        <img src={girl} alt="girl" />
      </div>
      <div className="ss__more_content">
        <h1 className="ss__more_content_title">What else can you do with SaveSpace?</h1>
        <ul className="ss__more_content_list">
          <li>Are you scared of participating in ajo, esusu or adashe? SaveSpace allows you participate in thrift worry free.</li>
          <li>Accept payments from all banks. Several features on the app ensure maximum guarantee and transparency.</li>
          <li>SaveSpace allows you to invest your money in different industries, with mouth watering ROI.</li>
        </ul>
        <button className='learn-more'>Learn More</button>
      </div>
    </section>
  )
}

export default More