import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecordWorkshops from './RecordWorkshops';
import LeranCard from './LeranCard';

const LearnMeterial = () => {
  const [LearnMeterial, setLearnMetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLearn = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.post(`${apiUrl}/api/v2/get-workshop`);
      setLearnMetails(res.data.workshops);
      console.log(res.data.workshops)
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
    <>
      <h2 className="head">Workshops</h2>

      {loading && !error && (
        <>
          {/* Display 6 skeleton loaders while loading */}
          
        </>
      )}

{error && (
  <div className='grid'>
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
          <LeranCard LearnMeterial={LearnMeterial} />
        </div>
      )}
    </>
  );
};

export default LearnMeterial;
