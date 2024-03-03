import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../Loader/Loader';
import './product.css';

const FPaymentSuccess = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);
  const token = localStorage.getItem('token');
  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    Email: '',
    Name: '',
    occupation: '',
    schoolName: '',
    contactNumber: '',
    SeminarId: id,
  });

  const retrieveData = () => {
    try {
      const serializedLearnDetails = localStorage.getItem('completeinfo');
      if (serializedLearnDetails) {
        const parsedLearnDetails = JSON.parse(serializedLearnDetails);
        setProductData(parsedLearnDetails);
      }
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:4000/api/v2/registerFreeSeminar',
        formData
      );

      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      
        console.error('Error:', error);

    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataByUrl = async (id) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const res = await axios.get(`${apiUrl}/api/v1/payment/do-for-paid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPayment(res.data);
      console.log(res.data);

      toast.success('Payment Successful!');
      localStorage.removeItem('workshopid', id);

      setTimeout(() => {
        // window.location.href = "/User/dashboard"
      }, 4000);
    } catch (error) {
      console.error(error.response.data.message);
      toast.success('You Are Already Purchase This Product!');
      // window.location.href = "/User/dashboard"
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  if (!token) {
    window.location.href = '/User/Login';
  }

  return (
    <div className='demo_payments' style={styles.container}>
      <div className='product-info'>
        <div className='Product-img'>
          <img src={productData?.WorkShopThmbnail || 'No Img'} alt='' />
        </div>
        <div className='Product-into-text'>
          <h4>{productData?.WorkShopTitle || 'No Title'}</h4>
          <h3 className='normal-price'>Price: {productData?.DiscountPrice || 'N/A'}</h3>
          <h3 className='free-price'>
            {productData?.DiscountPrice === '0' ? 'Free' : `${productData?.DiscountPrice || 'N/A'} USD`} <br />
            <span>Register Yourself For Awesome Session</span>
          </h3>
        </div>
      </div>

      <div className='Login_container'>
        <div className='login_conatiner_box' style={{ padding: '40px' }}>
          <div className='Login_text'>
            <h4 className='Login_head'>Register Your Self For Free Webinar </h4>
          </div>
          <div className='login-form-box'>
            <form className='Login_form' onSubmit={handleSubmit}>
              <div className='Login_For_group'>
                <input
                  type='text'
                  name='Email'
                  placeholder='Enter Your Email Address'
                  value={formData.Email}
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className='Login_For_group'>
                <input
                  type='text'
                  name='Name'
                  placeholder='Enter Your Good Name'
                  value={formData.Name}
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className='Login_For_group'>
                <input
                  type='text'
                  name='occupation'
                  placeholder='Enter Your occupation '
                  value={formData.occupation}
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className='Login_For_group'>
                <input
                  type='text'
                  name='schoolName'
                  placeholder='Enter Your School Name '
                  value={formData.schoolName}
                  required={true}
                  onChange={handleChange}
                />
              </div>
              <div className='Login_For_group'>
                <input
                  type='tel'
                  name='contactNumber'
                  placeholder='Enter Your Contact Number '
                  value={formData.contactNumber}
                  required={true}
                  onChange={handleChange}
                />
              </div>

              <div className='Login_btn'>
                <button onClick={() => fetchDataByUrl(id)} style={styles.button} className='login_cta' type='submit' disabled={isLoading}>
                  {isLoading ? <Loader /> : 'Pay now '}
                </button> <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: 'center',
    margin: '20px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  paymentDetails: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#dff0d8',
    borderRadius: '5px',
  },
};

export default FPaymentSuccess;
