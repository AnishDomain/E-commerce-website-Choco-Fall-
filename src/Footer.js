import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';



function Footer() {
    return (
      <>
       <section className="contactinfos">
                    <div className="emailform">
                       <form>
                         <input type="text" placeholder="Enter your email"></input>
                         <button>
                            <FontAwesomeIcon icon={faArrowRight} />
                         </button>
                       </form>
                    </div>
                    <div className="socialmedialinks">
                       <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"><FontAwesomeIcon className="icon" icon={faFacebook} /></a>
                       <a href="https://x.com/i/flow/login"><FontAwesomeIcon  className="icon" icon={faXTwitter} /></a>
                       <a href="https://in.linkedin.com/"><FontAwesomeIcon  className="icon" icon={faLinkedin} /></a>
                    </div>
                    <div className="menus">
                        <h4>Menu</h4>
                        <ul className="menulist">
                         <li><a href="#">Home</a></li>
                         <li><Link to="/Aboutpage">About</Link></li>
                         <li><Link to="Productspage">Chocolate</Link></li>
                         <li><Link to="Contactus">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className="company">
                      <h4>Company</h4>
                      <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                    </div>
                    <div className="Contactus">
                      <h4>Contact us</h4>
                      <a href="#"><FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "15px" }}/>Location</a>
                      <a href="#"><FontAwesomeIcon icon={faPhone} style={{ marginRight: "15px" }} />Call +01 2356789912</a>
                      <a href="#"><FontAwesomeIcon icon={faMessage} style={{ marginRight: "15px",marginTop:'5px' }}/>test@gmail.com</a>
                    </div>
                  </section>
                  <div className="footer">
                  <p>&copy; 2024 All Rights Reserved By Me</p>
                </div>
                
       </>
    );
  }
  
  export default Footer;

  
