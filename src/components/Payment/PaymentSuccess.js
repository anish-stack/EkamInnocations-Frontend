import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './product.css'
import { toast } from 'react-hot-toast';
import Loader from '../Loader/Loader';

const PaymentSuccess = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState(null); // Initialize with a default value
  const token = localStorage.getItem('token');
  const [productData,setProductData] = useState()
  const retrieveData = () => {
    try {
      const serializedLearnDetails = localStorage.getItem('completeinfo');
      if (serializedLearnDetails) {
        const parsedLearnDetails = JSON.parse(serializedLearnDetails);
        setProductData(parsedLearnDetails  )
      }
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
    }
  };
localStorage.setItem('workshopid',id)
const apiUrl = process.env.REACT_APP_API_URL;
// console.log(apiUrl)
const [isLoading, setIsLoading] = useState(false);
const [formData, setFormData] = useState({
    email: '',
    password: '',
    Designiation:'',
    username:''
  });
  const [showPassword, setShowPassword] = useState(false);
const handleTogglePassword = () => {
setShowPassword((prevShowPassword) => !prevShowPassword);
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
      const response = await axios.post(`${apiUrl}/api/v1/SignUp`, formData);
      
        // console.log(response.data)

                       toast.success(response.data.message)

       
  
  
    } catch (error) {
        if (error.response && error.response.data && error.response.data === "400") {
            // If there are validation errors, update the state with the error message
            toast.error(error.response.data.errors[0]);
          } 
          if (error.response && error.response.status === 400) {
            // If there are validation errors, update the state with the error message
            toast.error('User Already Exist With This Email');
          } 
          
          
          else {
            // Handle other types of errors (network, server, etc.)
            console.error('Error:', error);
            // setError('An error occurred. Please try again later.');
          }
        
    }finally {
      // Set loading state to false after the request is completed
      setIsLoading(false);
    }
  };
  
  useEffect(()=>{
    retrieveData()
  },[])
if(!token){
    window.location.href="/User/Login"
  }
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


      // Trigger the toast on successful payment
      toast.success('Payment Successful!');
      localStorage.removeItem('workshopid',id)

      setTimeout(()=>{
        window.location.href="/User/dashboard"

      },4000)
    } catch (error) {
      console.error(error.response.data.message);
      // Trigger the toast on payment failure
      toast.success('You Are Already Purchase This Product!');
      window.location.href="/User/dashboard"
    }
  };

  return (
    <div className='demo_payments' style={styles.container}>
<div className='product-info'>
  <div className='Product-img'>
    <img src={productData?.WorkShopThmbnail || "No Img"} alt="" />
  </div>
  <div className='Product-into-text'>
    <h4>{productData?.WorkShopTitle || "No Title"}</h4>
    <h3 className='normal-price'>Price: {productData?.DiscountPrice || "N/A"}</h3>
    <h3 className='free-price'>
      {productData?.DiscountPrice === "0" ? "Free" : `${productData?.DiscountPrice || "N/A"} USD`} <br/>
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
                type="text"
                name="email"
                placeholder='Enter Your Email Address'
                value={formData.email}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className='Login_For_group'>
              <input
                type="text"
                name="username"
                placeholder='Enter Your Good Name'
                value={formData.username}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className='Login_For_group'>
              <input
                type="text"
                name="Designiation"
                placeholder='Enter Your Designiation '
                value={formData.Designiation}
                required={true}
                onChange={handleChange}
              />
            </div>
            <div className='Login_For_group'>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder='Enter Your Password'
                value={formData.password}
                required={true}

                onChange={handleChange}
              />
              <div className='toggle-switch' onClick={handleTogglePassword}>
                {showPassword ? (
                  <ion-icon name="eye-outline" className="open-eye"></ion-icon>
                ) : (
                  <ion-icon name="eye-off-outline" className="close-eye"></ion-icon>
                )}
              </div>
            </div>

            <div className='Login_btn'>
            <button  onClick={() => fetchDataByUrl(id)} style={styles.button} className='login_cta' type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'Pay now '}
      </button>                    <br/>
              

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
  backgroundColor: '#dff0d8', // Green background color as an example
  borderRadius: '5px',
},
};

export default PaymentSuccess;