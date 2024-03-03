import React from 'react'
import './team.css'
import sir from './sir.jpeg'
import mam from './mam.jpeg'

const TeamPage = () => {
  return (
    <section className="team-section">
    <h2 className="team-heading">Our Team</h2>
    <hr className="team-divider" />
    <p className="team-description">Our team consists only of the best talents</p>

    {/* Team members */}
    <div className="team-member">
      {/* Member 1 */}
      <div className="team-member-info">
        <div className="team-member-img">
          <img
            src={sir}
            alt="KaramJeet Singh Sodhi"
          />
        </div>
        <div className="team-member-details bg-red-100">
          <h3 className="team-member-name">KaramJeet Singh Sodhi</h3>
          <span className="team-member-role">Director</span>
          <p className="team-member-description">
          KaramJeet Singh Sodhi brings visionary leadership to Ekam Innocations as our Director. With a wealth of experience
    and expertise, he guides our team towards excellence. His commitment to innovation and dedication to creating a
    positive impact make him an invaluable part of our journey.
          </p>
        </div>
        
      </div>
      <div className="team-member-info">
        <div className="team-member-img">
          <img
            src={mam}
            alt="Aditi Bhasin"
          />
        </div>
        <div className="team-member-details bg-blue-100">
          <h3 className="team-member-name">Aditi Bhasin</h3>
          <span className="team-member-role">Speaker</span>
          <p className="team-member-description">
    Aditi Bhasin, our esteemed Speaker, brings a wealth of knowledge and passion to Ekam Innocations. With a captivating
    presence and a commitment to inspiring others, she has played a pivotal role in shaping meaningful conversations and
    sharing valuable insights. Aditi's dedication to empowerment through education is a driving force in our journey.
  </p>
        </div>
        
      </div>
      {/* <div className="team-member-info">
        <div className="team-member-img">
          <img
            src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hanna Lubin"
          />
        </div>
        <div className="team-member-details bg-yellow-100">
          <h3 className="team-member-name">Hanna Lubin</h3>
          <span className="team-member-role">Doctor</span>
          <p className="team-member-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil
            cupiditate culpa temporibus, facere nisi.
          </p>
        </div>
        
      </div>
      <div className="team-member-info">
        <div className="team-member-img">
          <img
            src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hanna Lubin"
          />
        </div>
        <div className="team-member-details bg-green-100">
          <h3 className="team-member-name">Hanna Lubin</h3>
          <span className="team-member-role">Doctor</span>
          <p className="team-member-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam saepe sint expedita suscipit nemo nihil
            cupiditate culpa temporibus, facere nisi.
          </p>
        </div>
        
      </div> */}

      {/* Member 2 */}
      {/* Add more members as needed */}
    </div>
  </section>
  )
}

export default TeamPage