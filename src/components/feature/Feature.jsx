import './feature.css'

const Feature = (props) => {
  return (
    <div className='feature-card'>
        <img src={props.img} alt='props icon' className="feature-img" />
        <p className="feature-text">{props.text}</p>
    </div>
  )
}

export default Feature