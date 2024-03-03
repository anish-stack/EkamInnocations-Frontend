import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PdfView from './PdfView';
const PdfBooksCard = ({ PdfMaterial }) => {
  const { _id, title, downloads, bookDescription,PdfBookThumbnail,PdfLinks } = PdfMaterial;
  const token = localStorage.getItem('token');
  const [showPdfModal, setShowPdfModal] = useState(false);
  // const handleDownload =async () => {
  //   if (token) {
  //   try {
  //     window.location.href = `https://ekambackend.onrender.com/api/v2/download-pdf/${_id}`
  //   } catch (error) {
  //       // console.log(error)
  //   }
  //   } else {
  //       localStorage.setItem('downloadId', _id);
    
  //   }
  // };

  const handleReadPdf = () => {
    setShowPdfModal(true);
  };

  const handleClosePdfModal = () => {
    setShowPdfModal(false);
  };

  return (
    <>
    <div className='Audio_book_container'>
      <div className='AudioBook_thumb'>
        <div className='thumb-img'>
        <img src={PdfBookThumbnail} alt="img"/>

        </div>
        <div className='Audio_book_details'>
          <h3 className="Audio_book_name">{title}</h3>
          <h4 className='total-downloads'>{`Total Downloads: ${downloads}`}</h4>
          <p className='audio_description'>{bookDescription}</p>
          {token ? (
            <>
              <button className='download-button' onClick={handleReadPdf}>
                Read Book <ion-icon name="document-text-outline"></ion-icon>
              </button>
             
            </>
          ) : (
            <Link to="/User/login">
              <button className='signin-button' >Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>


     {showPdfModal && (
                <PdfView pdfLink={PdfLinks} onClose={handleClosePdfModal} />
              )}
    </>
  );
};



export default PdfBooksCard;
