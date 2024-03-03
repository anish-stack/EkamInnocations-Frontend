import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Postion.css'
const AllPostions = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
const [Postion,SetPostion] = useState()
    const fetchdata = async()=>{

        try {
            const response = await axios.get(`${apiUrl}/api/v1/get-Position`)
            SetPostion(response.data.positions)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='Postion_conatiner'>
        <div className='Postion_Heading'>
            <h2>Apply now</h2>
        </div>
        <table className='table-head'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {Postion && Postion.map((position) => (
                        <tr key={position._id}>
                            <td className='info-td'>
                                <Link to={`/Postion-Information/${position._id}`}>{position.jobPosition}</Link>
                            </td>
                            <td className='info-td'>{position.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

    </div>
  )
}

export default AllPostions