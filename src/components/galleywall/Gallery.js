// Gallery.js


import React, { useState } from 'react';import './Gallery.css';
import img1 from './revew (1).jpeg';
import img2 from './revew (2).jpeg';
import img3 from './revew (3).jpeg';
import img4 from './revew (4).jpeg';
import img5 from './revew (5).jpeg';
import img6 from './revew (6).jpeg';
import img7 from './revew (7).jpeg';
import img8 from './revew (8).jpeg';
import img9 from './revew (9).jpeg';
import img10 from './revew (10).jpeg';
import ReviewModal from './ReviewModel';

const Gallery = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => {
    setSelectedReview(review);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedReview(null);
    setModalVisible(false);
  };
  // Sample data for twenty reviews
  const reviewsData = [
    { id: 1, name: 'John Doe', review: 'Great experience!', img: img1 },
    { id: 2, name: 'Jane Smith', review: 'Amazing service!', img: img2 },
    { id: 3, name: 'Bob Johnson', review: 'Highly recommended!', img: img3 },
    { id: 4, name: 'Alice Brown', review: 'Fantastic work!', img: img4 },
    { id: 5, name: 'Charlie White', review: 'Excellent team!', img: img5 },
    { id: 6, name: 'David Lee', review: 'Superb job!', img: img6 },
    { id: 7, name: 'Emily Turner', review: 'Impressive results!', img: img7 },
    { id: 8, name: 'Frank Miller', review: 'Outstanding service!', img: img8 },
    { id: 9, name: 'Grace Wilson', review: 'Exceptional quality!', img: img9 },
    { id: 10, name: 'Henry Davis', review: 'Very satisfied!', img: img10 },

  ];

  return (
    <div className='gallery-wall'>
      <h3>Our Reviews Wall </h3>
      <div className='gallery-container'>
        {reviewsData.map((review) => (
          <div key={review.id} className='paper' onClick={() => openModal(review)}>
            <div className='pin'>
              <div className='shadow'></div>
              <div className='metal'></div>
              <div className='bottom-circle'></div>
            </div>
            <img src={review.img} alt="" />
          </div>
        ))}
      </div>
      <ReviewModal showModal={modalVisible} closeModal={closeModal} review={selectedReview} />
    </div>
  );
};

export default Gallery;
