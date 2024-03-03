import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import './SinglePostion.css'
const SinglePostions = () => {
    const [Postion, SetPostion] = useState()

    const { id } = useParams();
    console.log(id);
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchdata = async () => {

        try {
            const response = await axios.get(`${apiUrl}/api/v1/get-Position/${id}`)
            SetPostion(response.data.position)
            console.log(response.data.position)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div className='Postion-Conatiner-information'>
            <div className='heading_postion'>
                <h2>Apply Now</h2>
                <Link className='heading_back' to="/Teach-with-us"> ↩ back to Jobs </Link>

            </div>
       

            <div className='postion__conatiner'>
                <div className='stacticname'>Ekam Innocation.com</div>
                <div className='info_postion'>
                    <div className='heading-postion'>{Postion?.jobPosition || 'No Job Position Available'}</div>
                    <div className='countery-postion'>{Postion?.location || 'No Job Location Available'}</div>
                    <div className='About-postion'>
                        <span>About the role</span>
                        <p>{Postion?.applicationProcess || 'No Job Location Available'}</p>
                    </div>

                    <div className='Requirements-list'>
                        <h3 className='headins_list'>Qualifications:</h3>
                        <ul className='benifts-table'>
                            {Postion?.requirements?.qualifications?.map((qualification, index) => (
                                <li key={index}>{qualification}</li>
                            ))}
                        </ul>
                        <h3 className='headins_list'>Subjects:</h3>
                        <ul className='benifts-table'>
                            {Postion?.requirements?.subjects?.map((subject, index) => (
                                <li key={index}>{subject}</li>
                            ))}
                        </ul>

                        <h3 className='headins_list'>Benefits:</h3>
                        <ul className='benifts-table'>
                            <li>
                                <h4>Payment:</h4>
                                <p>{Postion?.benefits?.payment || 'Not specified'}</p>
                            </li>
                            <li>
                                <h4>Support:</h4>
                                <p>{Postion?.benefits?.support || 'Not specified'}</p>
                            </li>
                            <li>
                                <h4>Work Schedule:</h4>
                                <p>{Postion?.benefits?.workSchedule || 'Not specified'}</p>
                            </li>
                        </ul>
                    </div>
                    <div className='aboutekam'>
                    <h4 className='headins_list'>About Ekam</h4>
                    {Postion?.aboutEkam || 'No About Available'}
                    </div>

                    <div className='apply-cta-conatiner'>
                <Link to="/Apply-Now">Apply</Link>
             <br/> <br/>
                <h3 className='Thankyou'>Thankyou😊</h3>

            </div>
                </div>
                <div className='glow'></div>
            </div>
        </div>
    );
};

export default SinglePostions;