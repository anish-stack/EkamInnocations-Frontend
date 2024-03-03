import React from 'react'
import './teach.css'
import { Link } from 'react-router-dom'
import img1 from './contractor-icon-hours.svg'
import img2 from './contractor-icon-payments.svg'

import img3 from './contractor-icon-staff.svg'

const Teachheader = () => {
  return (
    <div className='teache_conatiner'>
        <div className='techer-box'>
            <div className='tech-with-text'>
                <h2>Flexible education gigs with Ekam Innocations.com</h2>
                <p>Reach students worldwide with one of these great, flexible work-from-home contractor positions writing, reviewing, editing, and more!</p>

                <div className='postion-cta'>
                   <Link>View Open positions</Link>
                </div>
            </div>
        </div>

        <div className='benifts_with_ekam_container'>
            <div className='benifts'>
                <div className='headings_benifts'>
                    <h3>Benefits of online work as a  Ekam Innocations.com contractor</h3>
                </div>
                <div className='benifts_card_conatiner'>
                    <div className='benifts_card'>
                        <div className='benifts_img'>
                            <img src={img1} alt="img" />
                        </div>
                        <div className='cards-head'>
                            <span>Flexible hours</span>
                            <p>Work wherever and whenever you want, completely online</p>
                        </div>

                    </div>
                    <div className='benifts_card'>
                        <div className='benifts_img'>
                            <img src={img2} alt="img" />
                        </div>
                        <div className='cards-head'>
                            <span>Reliable payments</span>
                            <p>Timely, reliable payments twice a month

</p>
                        </div>

                    </div>
                    <div className='benifts_card'>
                        <div className='benifts_img'>
                            <img src={img3} alt="img" />
                        </div>
                        <div className='cards-head'>
                            <span>Flexible hours</span>
                            <p>Our in-house team is available to help you succeed</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teachheader