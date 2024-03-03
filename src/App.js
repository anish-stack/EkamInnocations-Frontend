import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {  Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/Home';
import Login from './components/Auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import Header from './components/Headers/Header'
import LearnComplete from './components/LearnMaterial/LearnComplete';
import AudioBooks from './components/audioBooks/AudioBooks';
import PdfBooks from './components/pdfEbooks/PdfBooks';
import PaidContent from './components/PaidContent/PaidContent';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import Dashboard from './components/dashboard/Dashboard';
import Certificate from './components/dashboard/certificate';
import Error404 from './components/ErrorPage/Error404';
import ContactForm from './components/dashboard/Conatct';
import Error from './components/ErrorPage/Error';
import Footer from './components/Footer/Footer';
import RecordWorkshops from './components/LearnMaterial/RecordWorkshops';
import Loader from './components/Loader/Loader';
import LearnMeterial from './components/LearnMaterial/LearnMeterial';
import Aboutus from './components/home/Aboutus';
import Activatepage from './components/ActivaatePage/Activatepage';
import TecchAll from './components/TeachWithus/TecchAll';
import ApplyNowModel from './components/TeachWithus/ApplyNowModel';
import SinglePostions from './components/TeachWithus/SinglePostions';
import ChangePassword from './components/Auth/ChangePassword';
import Gallery from './components/galleywall/Gallery';
import FPaymentSuccess from './components/Payment/FreePayment';
import EbookResources from './components/Resources/EbookResources';
import Support from './components/SupportPage/Support';
import TeamPage from './components/SupportPage/TeamPage';
import DataPage from './components/SupportPage/DataPage';
import BooksE from './components/Resources/BooksE';
import SingleEBooks from './components/Resources/SingleE-Books';
function App() {
  const [shouldRenderCertificate, setShouldRenderCertificate] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const updateWindowWidth = () => {
    setShouldRenderCertificate(window.innerWidth !== 768);
  };

  useEffect(() => {
    // Initial setup
    updateWindowWidth();

    // Event listener for window resize
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <>
     {showLoader && <Loader />}
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User/login" element={<Login />} />
        <Route path="/User/Register" element={<Register />} />
        <Route path="/workshop/:id" element={<LearnComplete />} />
        <Route path="/AudioBooks" element={<AudioBooks />} />
        <Route path="/E-Books" element={<PdfBooks />} />
        <Route path="/Paid/:audioBookId" element={<PaidContent />} />
        <Route path="/Enroll/:id" element={<PaymentSuccess />} />
        <Route path="/Enroll-free/:id" element={<FPaymentSuccess />} />
        <Route path="/Resources" element={<EbookResources />} />
        <Route path="/Support" element={<Support/>} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/data" element={<DataPage/>} />

        <Route path="/User/dashboard" element={<Dashboard />} />
        {shouldRenderCertificate && (
        <Route path="/User/certificates" element={<Certificate />} />
      )}
              <Route path="/User/N/A" element={<Error404 />} />
        <Route path="/User/Contact" element={<ContactForm />} />
        <Route path="/*" element={<Error />} />
        <Route path="/recorded-workshop" element={<RecordWorkshops />} />
        <Route path="/Gallery" element={<Gallery/>}/>

        <Route path="/Change-Password" element={<ChangePassword/>}/>

        <Route path="/Seminars" element={<LearnMeterial/>} />
        <Route path="/About" element={<Aboutus/>}/>
        <Route path="/Teach-With-us" element={<TecchAll/>}/>
        <Route path="/Apply-Now" element={<ApplyNowModel/>}/>
        <Route path="/Postion-Information/:id" element={<SinglePostions/>}/>
        <Route path="/Books-E" element={<BooksE/>}/>
        <Route path="/Single-Books-E/:id" element={<SingleEBooks/>}/>

        <Route path="/activate-account/336259449494422343434ehsyysdbxfssun/user-giv/ltm=opopm/Activate" element={<Activatepage/>}/>

        {/* <Route path="/Paid" element={<PaidContent />} /> */}

      </Routes>       

 
    </Router>
    <Footer/>
    <Toaster/>
    <ToastContainer />
    </>
   

  );
}

export default App;
