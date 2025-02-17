
import "./App.css"
import image1 from './slider-bg1.png';
import image2 from './slider-img.png';
import image3 from './about-img.png';
import slide1 from './chocolate1.png';
import slide2 from './chocolate2.png';
import slide3 from './chocolate3.png';
import offerimage from './offer-img.png';
import Contactus from './Contactus'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { Routes,Link } from "react-router-dom";
import Header from "./Header";







function Home({slides,currentSlideIndex,previousSlide,nextSlide}) {
 
  

  
return (
      <>
      
      
    <div className="maincontainer">
       <div className="bannercontent">
          <img  src = {image1}></img>
            <h1 className="header1"> Chocolates</h1>
            
            <img className="chocolatebowl" src = {image2}></img>
        </div>
        <div className="about">
          <h1>About Our Company</h1>
          <p>Choco Fall is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their default model text, </p>
          <img src={image3}></img>
        </div>
        <div className="products">
          <h1>Our chocolate products</h1>
          <p>Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their</p>
        </div>
        <div className="manualslider">
            <img
              src={slides[currentSlideIndex]}
            />
         </div>
          <button className="previous" style={{position:"relative", top:'2%', left:"40%",cursor:"pointer" }} onClick={previousSlide}>
             ◀
           </button>
          <button className="next" style={{position:"relative", top:'2%',  left:"40%",cursor:"pointer" }} onClick={nextSlide}>
             ▶
          </button>
          <div className="offers">
            <h1>Offers on chocolates</h1>
            <p>Get 5% Offer</p>
            <p>any Chocolate items</p>
            <button>Buy NOW</button>
            <img  className="offer" src={offerimage}></img>
          </div>
         <div className="contactus">
            <h1>Contact Us</h1>
           <form>
             <input type="text"
              placeholder="Full Name"
             ></input>
             <input type="text"
              placeholder="Phone number"
             ></input>
             <input type="text"
              placeholder="Email"
             ></input>
             <input type="text"
              placeholder="Message"
             ></input>
           </form>
          <button>SEND NOW</button>
         </div>
          
           
      </div>
         
         
       
      </>
    );
  }
  
  export default Home;
  