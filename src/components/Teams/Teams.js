import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Teams.css";
// import required modules
import { Autoplay } from "swiper/modules";
const Teams = () => {
  const TeamsData = [
    {
      id: 1,
      Name: "SHIVANI GUPTA",
      ProfilePic:
        "https://i.ibb.co/029R69S/Whats-App-Image-2024-01-19-at-13-21-08-74114eac.jpg",
      Designation: "Communications and Language Expert",
      Bio: "Ms. Shivani Gupta, a 24-year veteran in education, is a dynamic Communication and Language Expert, Teacher Trainer, and Curriculum Designer. As an English Subject Expert for national exams, she passionately conducts workshops for educators nationwide.",
      SocialMedia: [
        { Name: "Insta", Link: "https://github.com/anish-stack" },
        { Name: "Facebook", Link: "https://github.com/anish-stack" },
      ],
    },
    {
      id: 2,
      Name: "DEEPTI SINGHAL",
      ProfilePic: "https://i.ibb.co/gww9XBm/deeptipic.jpg",
      Designation: "Teacher",
      Bio: "Deepthi Singhal, an adept homemaker, possesses a Diploma in Fashion Designing and a Bachelor's degree in Arts. Proficient in art, craftwork, and organizational skills, she excels in multitasking and problem-solving. A self-motivated individual with a knack for interpersonal relations and a commitment to excellence.",
      SocialMedia: [
        {
          Name: "Insta",
          Link: "https://instagram.com/deeptisinghal75?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
        },
        { Name: "Facebook", Link: "https://github.com/anish-stack" },
      ],
    },
    {
      id: 3,
      Name: "Suman Chawla",
      ProfilePic: "https://i.ibb.co/JxJsMNp/image.png",
      Designation: "Training Consultant with British Council",
      Bio: "Suman Chawla, a seasoned educator and Training Consultant with the British Council, excels in Core Skills Training, Child Protection, and Micro: bit coding. Recognized for expertise, she's a versatile expert in teaching and training. ",
      SocialMedia: [
        { Name: "Insta", Link: "https://github.com/anish-stack" },
        { Name: "Facebook", Link: "https://github.com/anish-stack" },
      ],
    },
    {
      id: 4,
      Name: "Irene Khosla",
      ProfilePic:
        "https://i.ibb.co/f9nNPDX/Whats-App-Image-2024-01-28-at-14-27-18-86dc79ca.jpg",
      Designation: "Fervent educationist and counselling psychologist ",
      Bio: "Ms. Irene Khosla, a passionate educationist and counseling psychologist, possesses over 3 years of experience. With a master's in Clinical Psychology and ongoing PhD studies, she excels as a PGT Psychology, specializing in research-focused development, intervention programs, and workshops for children and adolescents.",
      SocialMedia: [
        { Name: "Insta", Link: "https://github.com/anish-stack" },
        { Name: "Facebook", Link: "https://github.com/anish-stack" },
      ],
    },
    {
      id: 5,
      Name: "Seema Bhatia",
      ProfilePic:
        "https://i.ibb.co/9Nt0xyQ/Whats-App-Image-2024-01-28-at-15-44-39-cfa5d4cd.jpg",
      Designation: "PGT English",
      Bio: "Seema Bhatia, a dedicated PGT English and Subject Coordinator with 16+ years of experience, excels in curriculum design, experiential learning, and cultural initiatives. A skilled trainer, she fosters a technology-driven, liberal, and harmonious classroom environment, emphasizing non-conformity and personalized care.",
      SocialMedia: [
        { Name: "Insta", Link: "https://github.com/anish-stack" },
        { Name: "Facebook", Link: "https://github.com/anish-stack" },
      ],
    },

    {
      id: 6,
      Name: "Pratiksha Chopra",
      ProfilePic:
        "https://i.ibb.co/vqmz3z8/Whats-App-Image-2024-01-28-at-15-45-28-0cae395e.jpg",
      Designation: "Teacher",
      Bio: "Pratiksha Chopra, an ELT Specialist and Fulbright Distinguished Teacher, is a dynamic English Language Teaching Consultant and Language Assessor. With a decade of teaching, she reshapes pedagogy, emphasizing teacher education and international experience, including a Fulbright scholarship. ",
      SocialMedia: [
        { Name: "Insta", Link: "https://github.com/anish-stack" },
        { Name: "Facebook", Link: "https://github.com/anish-stack" },
      ],
    },
    {
        id: 7,
        Name: "Harsha Garg",
        ProfilePic:
          "https://i.ibb.co/MZMLCQD/image.png",
        Designation: "ELT Specialist and Fulbright Distinguished Teacher",
        Bio: "Harsha Garg, a prolific ELT Specialist and Fulbright Distinguished Teacher, leverages 20 years of diverse industry experience. As founder of Wealth Gym, she transforms lives through holistic financial wellness coaching.",
        SocialMedia: [
          { Name: "Insta", Link: "https://github.com/anish-stack" },
          { Name: "Facebook", Link: "https://github.com/anish-stack" },
        ],
      },
      {
        id: 8,
        Name: "Vibha Khosla",
        ProfilePic:
          "https://i.ibb.co/Zz6gq6n/image.png",
        Designation: "Principal and COE Master Trainer",
        Bio: "Ms. Vibha Khosla, Principal at Shri Ram Global School Delhi-West and COE Master Trainer, brings over 25 years of expertise in educational planning and administration. A pioneer in innovative teaching, she excels in training educators nationwide, conducting 200+ workshops. As a CBSE City Coordinator, her influence extends to shaping pedagogical planning and fostering a passion for innovative teaching.",
        SocialMedia: [
          { Name: "Insta", Link: "https://github.com/anish-stack" },
          { Name: "Facebook", Link: "https://github.com/anish-stack" },
        ],
      },
      {
        id: 9,
        Name: "Karamjeet Singh Sodhi",
        ProfilePic:
          "https://i.ibb.co/Cngg4gR/image.png",
        Designation: "Trainer and English lecturer",
        Bio: "Karamjeet Singh Sodhi, a certified master trainer and English lecturer with over 20 years of experience, excels in TESOL, workshops, and mentorship. Notable for his curriculum contributions, online capacity building, and awards for teaching materials.",
        SocialMedia: [
          { Name: "Insta", Link: "https://github.com/anish-stack" },
          { Name: "Facebook", Link: "https://github.com/anish-stack" },
        ],
      }
  ];
  const [slidesPerView, setSlidesPerView] = useState('3');


  const handleResize = () => {
    const windowWidth = window.innerWidth;

    // Adjust slidesPerView based on window width
    if (windowWidth < 400) {
      setSlidesPerView(1);
    } else if (windowWidth >= 400 && windowWidth < 768) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial slidesPerView value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className="text-center p-5">
        <h2 className="text-5xl font-bold">Our Teams</h2>
      </div>

      <div className="teams-container">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {TeamsData &&
            TeamsData.reverse().map((item, index) => (
              <SwiperSlide key={index}>
                <div className="team-card bg-gray-900 ">
                  <div className="profile-pic-hexagon">
                    <img src={item.ProfilePic} alt={item.Name} />
                  </div>
                  <div className="team-details">
                    <h3 className="text-white font-extrabold">{item.Name}</h3>
                    <span>{item.Designation}</span>
                    <p className="capitalizew-[200px] hide text-gray-400 ">
                      {item.Bio}
                    </p>
                    {/* <div className="team-social">
                      {item.SocialMedia &&
                        item.SocialMedia.map((social, idx) => (
                          <div className="inline-block mr-4" key={idx}>
                            <a
                              href={social.Link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-700"
                            >
                              {social.Name === "Insta" && (
                                <ion-icon name="logo-instagram"></ion-icon>
                              )}
                              {social.Name === "Facebook" && (
                                <ion-icon name="logo-facebook"></ion-icon>
                              )}
                            </a>
                          </div>
                        ))}
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Teams;
