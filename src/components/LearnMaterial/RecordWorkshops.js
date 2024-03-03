import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import RecordCard from './RecordCard';
import Loader from '../Loader/Loader';

const RecordWorkshops = () => {
  const [LearnMeterial, setLearnMetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLearn = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await Axios.post(`${apiUrl}/api/v2/get-workshop`);
      const recordedWorkshops = res.data.workshops.filter(
        (workshop) => workshop.workShopType === "Recorded"
      );
      setLearnMetails(recordedWorkshops);
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLearn();
  }, []);

  return (
    <div className='margin-top'>
      <h2 className="head">Recorded Workshops</h2>

      {loading && (
        <div className='felx'>
          {[...Array(6)].map((_, index) => (
           <div key={index} className='skeleton-cards'>
           <div className='skeleton-image'></div>
     <div className='skeleton-heading'></div>
     <div className='skeleton-button'></div>
       </div>
          ))}
        </div>
      )}

      {error && (
        <div className='felx'>
          {[...Array(6)].map((_, index) => (
           <div key={index} className='skeleton-cards'>
           <div className='skeleton-image'></div>
     <div className='skeleton-heading'></div>
     <div className='skeleton-button'></div>
       </div>
          ))}
        </div>
      )}

      {!loading && !error && (
        <div className='felx'>
          <RecordCard LearnMeterial={LearnMeterial} />
        </div>
      )}
    </div>
  );
};

export default RecordWorkshops;
