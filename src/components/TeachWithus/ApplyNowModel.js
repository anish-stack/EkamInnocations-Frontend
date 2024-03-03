import React, { useState } from 'react';
import './appy.css'
import { toast } from 'react-hot-toast';
import axios from 'axios';
const ApplyNowModel = () => {
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

      const handleSubmit = async()=>{
  
          try {
              const response = await axios.post(`${apiUrl}/api/v1/Apply-job`,{
                name,
                occupation,
                email,
                contactNumber,resumeLink
              })
              console.log(response.data)
              toast.success('Application submitted successfully!');
          } catch (error) {
              console.log(error)
          }
  
      }
     

  return (
 <div className='apply-conatiner'>
      <h2>Apply Now</h2>
      <label className='labe-apply'>
        Name:
        <input className='input_apply' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className='labe-apply'>
        Which Profile You Apply:
        <input className='input_apply' type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
      </label>
      <label className='labe-apply'>
        Email:
        <input className='input_apply' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='labe-apply'>
        Contact Number:
        <input className='input_apply' type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
      </label>
      <label className='labe-apply'>
        Resume Link:
        <input className='input_apply' type="text" value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} />
      </label>
      <button className='applyCta' onClick={handleSubmit}>Submit</button>
      </div>

  );
};

export default ApplyNowModel;
