import React from 'react'
import img1 from './curiculm.png'
import img2 from './Untitled design.png'
import img3 from './contractor-type-research-copywriting.png'
import img4 from './research.png'

import { Link } from 'react-router-dom'
import './postiner.css'
const Postions = () => {

  

  return (
    <div className='postion_conatiner'> 

    <div className='postiners_main'>
        <div className='postiner_text'>
            <div className='postiner_head'>
                <h2>Lesson writing & curriculum design</h2>
            </div>
            <div className='Postiner_para'>
                <p>Discover the opportunity to teach from the comfort of your home at your own pace. We seek knowledgeable educators to contribute to EkamInnovation.com, building a library of lessons for widespread student accessibility.</p>
            </div>
            <div className='apply-cta-conatiner'>
                <Link to="/Apply-Now">Apply</Link>
            </div>
        </div>
        <div className='postiner_img'>
            <div className='img-side'>
                <img src={img1} alt="img" />
            </div>
        </div>
    </div>

    <div className='postiners_main'>
        <div className='postiner_text'>
            <div className='postiner_head'>
                <h2>Q&A homework help</h2>
            </div>
            <div className='Postiner_para'>
                <p>
Explore an engaging and flexible opportunity to become an online tutor through our Expert Q&A roles. Assist students with challenging homework problems on your schedule—whether it's math, English, or any subject.</p>
            </div>
            <div className='apply-cta-conatiner'>
                <Link to="/Apply-Now">Apply</Link>
            </div>
        </div>
        <div className='postiner_img'>
            <div className='img-side'>
                <img src={img2} alt="img" />
            </div>
        </div>
    </div>

    <div className='postiners_main'>
        <div className='postiner_text'>
            <div className='postiner_head'>
                <h2>Research & copywriting</h2>
            </div>
            <div className='Postiner_para'>
                <p>Attention freelance writers! Say goodbye to endless searches for gigs. Apply for our openings to write about schools, majors, careers, and more.</p>
            </div>
            <div className='apply-cta-conatiner'>
                <Link to="/Apply-Now">Apply</Link>
            </div>
        </div>
        <div className='postiner_img'>
            <div className='img-side'>
                <img src={img3} alt="img" />
            </div>
        </div>
    </div>

    <div className='postiners_main'>
        <div className='postiner_text'>
            <div className='postiner_head'>
                <h2>Reviewing & editing</h2>
            </div>
            <div className='Postiner_para'>
                <p>Unlock exciting opportunities to leverage your expertise in reviewing, editing, and enhancing content. Explore roles at Ekam Innocations.com to contribute to our high-quality educational content.</p>
            </div>
            <div className='apply-cta-conatiner'>
                <Link to="/Apply-Now">Apply</Link>
            </div>
        </div>
        <div className='postiner_img'>
            <div className='img-side'>
                <img src={img4} alt="img" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Postions