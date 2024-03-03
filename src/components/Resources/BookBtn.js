import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookBtn.css'; // Import your CSS file

const BookBtn = () => {
  const [showBookBtn, setShowBookBtn] = useState(true);
  const [showDriveBtn, setShowDriveBtn] = useState(false);
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(countdown + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setShowBookBtn(false);
      setShowDriveBtn(true);
    }, 5000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return (
    <div className="book-btn-container">
      {showBookBtn && (
        <button className="main-btn" onClick={() => setShowBookBtn(false)}>
          Click For Link
        </button>
      )}

      {showDriveBtn && (
        <div className="second-button-container">
        {/* https://drive.google.com/drive/folders/1UuaX8oTphY5SvYwCw46h1-enNyOsvF4Q?usp=drive_link */}
          <Link target='_blank' to="/Books-E">
            <button className="drive-btn">Drive Link</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookBtn;
