import './goals.css'
import chart from '../../assets/chart.png'
import ellipse from '../../assets/Ellipse 24.png'

const Goals = () => {
  return (
    <section className="section__padding ss__goals" id='goals'>
      <div className="ss__goals_content">
        <h1 className="ss__goals_content_title">Stay Focused on Your Financial Goals</h1>
        <p className="ss__goals_content_text">Improve your financial goals with custom goals that keep you going.
         Save for a home, gadgets, car, education, conquer debt and be on your way to financial indepence.
        </p>
        <div className="ss__goals_content_comment">
          <img src={ellipse} alt="Avatar" />
          <div className="ss__goals_content_text-container">
            <p className="ss__goals_content_comment_text">“SaveSpace helped me reduce my spending habit.
            I needed money for my house rent so I started saving with SaveSpace, 
            I was able to save with discipline.”
            </p>
            <p className="ss__goals_content_name"><strong>Ade Lola</strong> <span>- Student</span></p>
          </div>
        </div>
      </div>
      <div className="ss__goals_img-container">
        <img src={chart} alt="chart" />
      </div>
    </section>
  )
}

export default Goals