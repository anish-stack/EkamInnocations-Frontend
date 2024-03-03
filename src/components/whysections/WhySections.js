import React from 'react';
import img from './database.png'
import img2 from './experince.png'
import img3 from './technical-support.png'
import { Link } from 'react-router-dom';

const WhySections = () => {
  const data = [
    {
      img: img,
      textparah4: "Lifetime access to all session and seminar recordings with profile security ensured.",
      route:"/data"
    },
    {
      img: img2,
      textparah4: "We boast a team of highly educated and professional teacher instructors.",
      route:"/team"
    },
    {
      img: img3,
      textparah4: "We offer 24/7 support throughout all batches and seminars, ensuring quality responses.",
      route:"/Support"

    },
  ];

  return (
    <div className='WhySections'>
    <h2>Why Choose Ekam Innocations</h2>
    <div className='WhySections_body'>
      {data.map((item, index) => (
        <Link to={item.route} key={index}>
          <div className='WhySections_card'>
            <div className="WhySections_img">
              <img src={item.img} alt={`Section ${index + 1}`} />
            </div>
            <div className='WhySections_text'>
              <h4 className='WhySections_text_para'>
                {item.textparah4}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default WhySections;
