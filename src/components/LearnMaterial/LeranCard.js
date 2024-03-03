import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Videomodel from './Videomodel';


const LearnCard = ({ LearnMeterial }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [showModel, setShowModel] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous data fetching operation
    const fetchData = async () => {
      // Add your actual data fetching logic here
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleToggleModel = (video) => {
    setSelectedVideo(video);
    setShowModel(true);
  };

  const handleCloseModel = () => {
    setSelectedVideo(null);
    setShowModel(false);
  };

  const totalPages = Math.ceil(LearnMeterial.length / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => (prevPage - 2 + totalPages) % totalPages + 1);
  };

  return (
    <>
      {loading ? (
        // Skeleton loader while content is loading
        <>
          {[...Array(itemsPerPage)].map((_, index) => (
            <div key={index} className='skeleton-cards'>
            <div className='skeleton-image'></div>
      <div className='skeleton-heading'></div>
      <div className='skeleton-button'></div>
        </div>
          ))}
        </>
      ) : (
        // Render actual content when loading is complete
        <>
        {LearnMeterial.slice()
          .reverse()
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((material, index) => (
            <div key={index} className='workshop_card'>
              <div className='workshop_card_body'>
                <div className='workshop_card_img'>
                  <img src={material.RecordSessionLink} alt="img" />
                </div>
                <div className='workshop_card_information'>
                  <h4><ion-icon name="person-circle-outline"></ion-icon>{material.TrainerName}</h4>
                  <h3>{material.workshopName}</h3>
                  <p><ion-icon name="calendar-outline"></ion-icon>{material.WorkShopDate}</p>
                </div>
                <Link to={`/workshop/${material._id}`} className="workshop_card_cta" type="">
                  Enroll Now
                </Link>
                <button className='demo-btn' onClick={() => handleToggleModel(material.DemoVideo)}>
                  <ion-icon name="play-circle-outline"></ion-icon>
                </button>
              </div>
            </div>
          ))}
      
        <div className="pagination-container">
          <button className="pagination-btn" onClick={handleClickPrev}>
            &lt;
          </button>
          <span className="pagination-current">{currentPage}</span>
          <button className="pagination-btn" onClick={handleClickNext}>
            &gt;
          </button>
        </div>
      
        {showModel && <Videomodel video={selectedVideo} onClose={handleCloseModel} />}
      </>
      
      )}
    </>
  );
};

export default LearnCard;
