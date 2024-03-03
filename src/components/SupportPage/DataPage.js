import React from 'react';
import './datacss.css'
const DataPage = () => {
  return (
  <>
   <h2 className="team-heading">We Have All Past Recordings</h2>
    <hr className="team-divider" />
    <p className="team-description">Our team Store All Recordings For You</p>
    <div className='datapage-container'>
      
      <div className='data-store-img'>
        <img src="https://learn.g2.com/hubfs/Data%20storage.png" alt='Data Storage' />
      </div>
      <div className='data-text'>
        <h2>Lifetime Access to Session and Seminar Recordings</h2>
        <p>
          At Ekam Innocations, we prioritize your learning journey. Gain a competitive edge with lifetime access to
          all session and seminar recordings. Our platform ensures your profile security, providing a safe and
          accessible space for continuous learning and development.
        </p>
        <p>
          Ekam Innocations is dedicated to empowering individuals through education. Explore a wealth of knowledge
          anytime, anywhere, and elevate your skills with our curated content. Join us on this transformative journey
          towards lifelong learning!
        </p>
      </div>
    </div>
    </>

  );
};

export default DataPage;
