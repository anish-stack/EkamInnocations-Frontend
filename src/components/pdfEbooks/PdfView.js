// PdfView.js

import React from 'react';
import './PdfView.css'; // Import the CSS file

const PdfView = ({ pdfLink, onClose }) => {
  return (
    <div className="pdf-modal">
      <div className="pdf-modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <iframe title="pdf-viewer" src={pdfLink} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default PdfView;
