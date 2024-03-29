// ReviewCard.js
import React, { useState } from 'react';
import './reviecard.css';

const ReviewCard = ({ review }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Convert review.Review to an array if it's a string
  const reviewsArray = Array.isArray(review.Review) ? review.Review : [review.Review];

  // Calculate the start and end indices for reviews based on the current page
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  // Display only the reviews for the current page
  const paginatedReviews = reviewsArray.slice(startIndex, endIndex);

  // Calculate the number of stars based on the provided rating
  const ratingStars = Array.from({ length: review.Rating }, (_, index) => (
    <span key={index} className="star-icon">
      {/* You can use your star icon or Unicode character for stars */}
      &#9733;
    </span>
  ));

  return (
    <div className="review-card">
      <div className="stars">{ratingStars}</div>
      {paginatedReviews.map((paginatedReview, index) => (
        <p key={index}>{paginatedReview}</p>
      ))}
      {reviewsArray.length > reviewsPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(reviewsArray.length / reviewsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
