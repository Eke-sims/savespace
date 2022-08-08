import './journey.css'
import Feature from '../feature/Feature'
import phoneImg from '../../assets/phone.png'
import { people,cardAdd, walletAdd, userAdd } from './import'

const Journey = () => {

  const featuresData =[{img:userAdd, text: "Create a SaveSpace account to get started. it's free!!! " },
    {img:walletAdd, text:"Link your bank account to your SaveSpace account. Don't worry your details are safe with us"},
    {img:cardAdd, text:"Start saving!!! You don't have to worry about late payments, you can tell us to automatically save for you"},
    {img:people, text:"Participate in thrifts (ajo,esusu and adashe) with your family and friends. Create a thrift plan and invite your friends to join you."}
  ]


  const featuresElement = featuresData.map(feature =>{
    return <Feature key={feature.img} img={feature.img} text={feature.text} />
  });

  return (
    <section className="section__padding ss__journey" id='journey'>
      <div className="ss__journey_img-container">
        <img src={phoneImg} alt="phone" />
      </div>
      <div className="ss__journey_content">
        <h1 className="ss__journey_content_title">
          Rewarding Your Every Step Of Financial Journey
        </h1>
        <p className="ss__journey_content_text">
          We have your back! You can count on us too. We want to give you the freedom of opening a save and
          secure savings and investment account with #0
        </p>
        <div className="ss__journey_content_features-container">
          {featuresElement}
        </div>
        <button className='try-for-free'>Try For Free</button>
      </div>
    </section>
  )
}

export default Journey