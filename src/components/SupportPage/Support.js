import React from 'react';
import './support.css';
import { Link } from 'react-router-dom';
import Circular from '../circular/Circular';

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-image">
        <img src="https://st2.depositphotos.com/3591429/8404/i/450/depositphotos_84042106-stock-illustration-background-with-people-hands.jpg" alt="Support Image" />
      </div>
      <div className="support-content">
        <h1>We offer 24/7 support throughout all batches and seminars</h1>
        <p>Ensuring quality responses for a better learning experience. 🌐</p>
        <p>At <strong>Ekam Innocations</strong>, we are committed to providing continuous support to our community. Our dedicated team is available around the clock to assist you with any queries, technical issues, or guidance you may need. Your success is our priority! 🚀</p>
        <table className='contact-table'>
    <tbody>
      <tr>
        <td>Email:</td>
        <td>support@ekaminnocations.com</td>
      </tr>
      <tr>
        <td>Contact Person:</td>
        <td>Karamjeet Singh Sodhi</td>
      </tr>
      <tr>
        <td>Phone Number:</td>
        <td>+91 89207 06700</td>
      </tr>
      <tr>
        <td>Address:</td>
        <td>Pitampura Cd Block 142</td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
      <Link to="/User/Contact">
      <button className='conatct'> Contact
      
</button>
</Link>
      </div>
     
    <Circular/>
    </div>
  );
}

export default Support;
