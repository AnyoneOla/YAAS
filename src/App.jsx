import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import './App.css'
import YoutubeAsAService from './components/YoutubeAsAService';
import HowThisWorks from './components/HowThisWorks';
import UnlockYoutube from './components/UnlockYoutube';
import WhyChoose from './components/WhyChoose';
import WeWorkWith from './components/WeWorkWith';
import Portfolio from './components/Portfolio';
import FAQs from './components/FAQs';
import Marquee from './components/Marquee';
import GetInTouch from './components/GetInTouch';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Initialize GSAP animation after component mounts
    gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
    gsap.to(".scaleDown", {
      scale: 0.7,
      scrollTrigger: {
        trigger: ".container",
        pin: ".container",
        scrub: true,
      },
    });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div style={{position:'relative'}}>
        <div style={{position:'absolute', top:'1000px'}}>
          <div style={{marginTop:'100px', marginBottom:'100px'}}>
            <Marquee children={[<div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
            ]} />
          </div>
          <div style={{marginTop:'100px', marginBottom:'100px'}}>
            <Marquee children={[<div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
            ]} />
          </div>
          <div style={{marginTop:'100px', marginBottom:'100px'}}>
            <Marquee children={[<div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
              <div style={{color:'#23002D', backgroundColor:'transparent', fontSize:'92px', fontFamily:'Clash Display, sans-serif'}}>YOUTUBE MADE EASY</div>,
            ]} />
          </div>
        </div>
      </div>
      <Navbar />
      <div className="container">
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" style={{marginTop:'96px'}}  width="100vw" viewBox="0 0 1745 756" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg-1705726041_7175">
          <g clipPath="url(#svg-1705726041_7175_clip0_109_1092)">
          <path opacity="0.1" d="M460.802 320.322L-50.7539 255.61V460.355L460.802 401.795L617.26 378.881L771.417 362.968L617.26 331.779L460.802 320.322Z" fill="#D9D9D9" stroke="url(#svg-1705726041_7175_paint0_linear_109_1092)" strokeWidth="1.36862"></path>
          <path opacity="0.4" d="M442.331 357.936L-82.3789 358.136L0.281181 464.665L475.223 400.326L618.463 378.045L762.286 359.559L599.447 353.538L442.331 357.936Z" fill="#D9D9D9" stroke="url(#svg-1705726041_7175_paint1_linear_109_1092)" strokeWidth="1.36862"></path>
          <path opacity="0.4" d="M410.71 358.543L-114 358.343L-31.3399 251.814L443.602 316.153L586.842 338.434L730.665 356.92L567.826 362.941L410.71 358.543Z" fill="#D9D9D9" stroke="url(#svg-1705726041_7175_paint2_linear_109_1092)" strokeWidth="1.36862"></path>
          <g filter="url(#svg-1705726041_7175_filter0_f_109_1092)">
          <path d="M460.802 320.322L-50.7539 255.61V460.355L460.802 401.795L617.26 378.881L771.417 362.968L617.26 331.779L460.802 320.322Z" fill="#D9D9D9"></path>
          <path d="M460.802 320.322L-50.7539 255.61V460.355L460.802 401.795L617.26 378.881L771.417 362.968L617.26 331.779L460.802 320.322Z" stroke="url(#svg-1705726041_7175_paint3_linear_109_1092)" strokeWidth="1.36862"></path>
          </g>
          <g filter="url(#svg-1705726041_7175_filter1_f_109_1092)">
          <path fillRule="evenodd" clipRule="evenodd" d="M1773.8 78L1780.94 92.9895L1805.19 87.9937V143.885L1907.44 358.513L1856.03 358.545L1805.19 465.271V627.128L1734.36 613.924L1722.66 638.478L954.757 469.062L840.298 440.066L725.114 412.592L475.867 370.69L498.26 363.312L490.622 361.713L505.905 360.793L725.114 288.563L948.745 261.893L1005.89 247.416L1773.8 78Z" fill="url(#svg-1705726041_7175_paint4_linear_109_1092)"></path>
          <path d="M1780.94 92.9895L1780.32 93.2838L1780.55 93.7679L1781.07 93.6597L1780.94 92.9895ZM1773.8 78L1774.41 77.7057L1774.18 77.2146L1773.65 77.3318L1773.8 78ZM1805.19 87.9937H1805.87V87.1541L1805.05 87.3235L1805.19 87.9937ZM1805.19 143.885H1804.5V144.04L1804.57 144.179L1805.19 143.885ZM1907.44 358.513L1907.44 359.197L1908.53 359.196L1908.06 358.218L1907.44 358.513ZM1856.03 358.545L1856.03 357.86L1855.6 357.861L1855.42 358.25L1856.03 358.545ZM1805.19 465.271L1804.57 464.977L1804.5 465.116V465.271H1805.19ZM1805.19 627.128L1805.06 627.801L1805.87 627.952V627.128H1805.19ZM1734.36 613.924L1734.49 613.252L1733.97 613.155L1733.74 613.63L1734.36 613.924ZM1722.66 638.478L1722.51 639.146L1723.05 639.264L1723.28 638.772L1722.66 638.478ZM954.757 469.062L954.589 469.726L954.599 469.728L954.609 469.731L954.757 469.062ZM840.298 440.066L840.466 439.402L840.457 439.4L840.298 440.066ZM725.114 412.592L725.273 411.926L725.251 411.921L725.228 411.917L725.114 412.592ZM475.867 370.69L475.653 370.04L475.754 371.365L475.867 370.69ZM498.26 363.312L498.474 363.962L500.894 363.164L498.4 362.642L498.26 363.312ZM490.622 361.713L490.581 361.03L490.481 362.383L490.622 361.713ZM505.905 360.793L505.946 361.476L506.035 361.471L506.119 361.443L505.905 360.793ZM725.114 288.563L725.033 287.884L724.965 287.892L724.9 287.913L725.114 288.563ZM948.745 261.893L948.826 262.572L948.87 262.567L948.913 262.556L948.745 261.893ZM1005.89 247.416L1005.74 246.748L1005.73 246.75L1005.72 246.752L1005.89 247.416ZM1781.55 92.6951L1774.41 77.7057L1773.18 78.2943L1780.32 93.2838L1781.55 92.6951ZM1805.05 87.3235L1780.8 92.3192L1781.07 93.6597L1805.32 88.664L1805.05 87.3235ZM1804.5 87.9937V143.885H1805.87V87.9937H1804.5ZM1908.06 358.218L1805.8 143.591L1804.57 144.179L1906.83 358.807L1908.06 358.218ZM1856.03 359.229L1907.44 359.197L1907.44 357.828L1856.03 357.86L1856.03 359.229ZM1805.8 465.565L1856.65 358.839L1855.42 358.25L1804.57 464.977L1805.8 465.565ZM1804.5 465.271V627.128H1805.87V465.271H1804.5ZM1734.24 614.597L1805.06 627.801L1805.31 626.456L1734.49 613.252L1734.24 614.597ZM1723.28 638.772L1734.98 614.219L1733.74 613.63L1722.04 638.184L1723.28 638.772ZM954.609 469.731L1722.51 639.146L1722.81 637.81L954.904 468.394L954.609 469.731ZM840.13 440.729L954.589 469.726L954.925 468.399L840.466 439.402L840.13 440.729ZM724.956 413.258L840.139 440.731L840.457 439.4L725.273 411.926L724.956 413.258ZM475.754 371.365L725.001 413.267L725.228 411.917L475.981 370.015L475.754 371.365ZM498.045 362.662L475.653 370.04L476.081 371.34L498.474 363.962L498.045 362.662ZM490.481 362.383L498.119 363.982L498.4 362.642L490.762 361.043L490.481 362.383ZM505.864 360.11L490.581 361.03L490.663 362.396L505.946 361.476L505.864 360.11ZM724.9 287.913L505.691 360.143L506.119 361.443L725.329 289.213L724.9 287.913ZM948.664 261.213L725.033 287.884L725.195 289.243L948.826 262.572L948.664 261.213ZM1005.72 246.752L948.577 261.229L948.913 262.556L1006.06 248.079L1005.72 246.752ZM1773.65 77.3318L1005.74 246.748L1006.04 248.084L1773.94 78.6682L1773.65 77.3318Z" fill="url(#svg-1705726041_7175_paint5_linear_109_1092)"></path>
          </g>
          </g>
          <defs>
          <filter id="svg-1705726041_7175_filter0_f_109_1092" x="-155.452" y="150.819" width="1031.02" height="414.318" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="52.0074" result="effect1_foregroundBlur_109_1092"></feGaussianBlur>
          </filter>
          <filter id="svg-1705726041_7175_filter1_f_109_1092" x="371.638" y="-26.8005" width="1640.9" height="770.079" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="52.0074" result="effect1_foregroundBlur_109_1092"></feGaussianBlur>
          </filter>
          <linearGradient id="svg-1705726041_7175_paint0_linear_109_1092" x1="360.331" y1="255.61" x2="360.331" y2="460.355" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="svg-1705726041_7175_paint1_linear_109_1092" x1="318.282" y1="330.918" x2="325.865" y2="442.547" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="svg-1705726041_7175_paint2_linear_109_1092" x1="286.661" y1="385.561" x2="294.244" y2="273.932" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="svg-1705726041_7175_paint3_linear_109_1092" x1="360.331" y1="255.61" x2="360.331" y2="460.355" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="svg-1705726041_7175_paint4_linear_109_1092" x1="1132.54" y1="87.9937" x2="1132.54" y2="627.128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AD00FF"></stop>
          <stop offset="0.171875" stopColor="#654DFF"></stop>
          <stop offset="0.34375" stopColor="#467AFF"></stop>
          <stop offset="0.515625" stopColor="#46FF7A"></stop>
          <stop offset="0.677083" stopColor="#FF7A00"></stop>
          <stop offset="0.848958" stopColor="#FFC046"></stop>
          <stop offset="1" stopColor="#FF4646"></stop>
          </linearGradient>
          <linearGradient id="svg-1705726041_7175_paint5_linear_109_1092" x1="1132.54" y1="87.9937" x2="1132.54" y2="627.128" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
          </linearGradient>
          <clipPath id="svg-1705726041_7175_clip0_109_1092">
          <rect width="1745" height="756" fill="white"></rect>
          </clipPath>
          </defs>
        </svg>
          <img 
            className="scaleDown" 
            src="https://framerusercontent.com/images/qOeouDoZ6tknWCJhs5JldBPGP4.png" // Adjust the path to your image
            alt="Background"
          />
      </div>

      
      <YoutubeAsAService />
      <HowThisWorks />
      <br /><br /><br /><br /><br /><br />
      <UnlockYoutube />
      <WhyChoose />
      <br /><br /> <br />
      <WeWorkWith />
      <br /><br /> <br />
      <Portfolio />
      <br /><br /> <br />
      <FAQs />
      <br /><br /><br />
      <GetInTouch />

    </>
  );
};

export default App;
