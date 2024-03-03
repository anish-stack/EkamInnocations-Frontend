import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AudioBooksCard from './AudioBooksCard';
import Loader from '../Loader/Loader'; // Import the skeleton loader component

const AudioBooks = () => {
  const [audioMaterials, setAudioMaterials] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);
  const fetchAudio = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.get(`${apiUrl}/api/v2/getAudioFiles`);
      setAudioMaterials(res.data.audioBooks);
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false); 
      setError(null);

    }
  };

  useEffect(() => {
    fetchAudio();
  }, []);

  return (
    <>
      <h2 className="head heads"> #free Audio Books</h2>
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
      {loading ? (
        // Skeleton loader while content is loading
        <div className='felx'>
          {[...Array(6)].map((_, index) => (
             <div key={index} className='skeleton-cards'>
             <div className='skeleton-image'></div>
       <div className='skeleton-heading'></div>
       <div className='skeleton-button'></div>
         </div>
          ))}
        </div>
      ) : (
        // Render actual content when loading is complete
        <div className='felx'>
          {audioMaterials &&
            Array.isArray(audioMaterials) &&
            audioMaterials.map((audioItem) => (
              <AudioBooksCard key={audioItem._id} audioMaterial={audioItem} />
            ))}
        </div>
      )}
    </>
  );
};

export default AudioBooks;
