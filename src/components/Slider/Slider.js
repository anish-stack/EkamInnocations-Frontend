import React, { Component } from "react";
import Slider from "react-slick";
import slideone from "./Personality develoemt.png"
import slidTwo from './innovatin.png'
import slideThree from './cont.png'

import { Link } from "react-router-dom";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div className="slider_conatiner">
        <Slider className="sliders" {...settings}>
      
           <Link to="/">
           <img src={slidTwo} alt="img" />
           </Link>

        <Link to="/">
        <img src={slideone} alt="img" />
          
        </Link>
        <Link to="/">
        <img src={slideThree} alt="img" />
          
        </Link>
 
             
        </Slider>
      </div>
    );
  }
}