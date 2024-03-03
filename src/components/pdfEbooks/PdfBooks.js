import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PdfBooksCard from './PdfBooksCard';

const PdfBooks = () => {
  const [pdfMaterials, setPdfMaterials] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  const fetchPdf = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.get(`${apiUrl}/api/v2/getpdfFiles`);
      setPdfMaterials(res.data.PdfBooks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false once the data is fetched
    }
  };

  useEffect(() => {
    fetchPdf();
  }, []);

  return (
    <>
      <h2 className="head">E-Books</h2>

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
          {pdfMaterials &&
            pdfMaterials.map((pdfItem) => (
              <PdfBooksCard key={pdfItem._id} PdfMaterial={pdfItem} />
            ))}
        </div>
      )}
    </>
  );
};

export default PdfBooks;
