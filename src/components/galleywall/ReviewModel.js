// ReviewModal.js

import React from 'react';
import './ReviewModal.css'; // Create this CSS file for styling

const ReviewModal = ({ showModal, closeModal, review }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="review-modal-overlay" onClick={closeModal}>
      <div className="review-modal">
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
          <h3>{review.name}'s Review</h3>
          <img src={review.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
