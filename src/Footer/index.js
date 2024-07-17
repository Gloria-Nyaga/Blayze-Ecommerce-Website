import './index.css';
import { FaFacebookF } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { IoLogoTwitter } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGooglePlay } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
    return(

    <footer>
        <div id="footer-text">
            <div>
                <h2>Need Help</h2>
                <p>Contact Us</p>
                <p>Track Order</p>
                <p>Returns & Refunds</p>
                <p>FAQ's</p>
                <p>Career</p>
            </div>

            <div>
                <h2>Company</h2>
                <p>About Us</p>
                <p>Blayze Blog</p>
                <p>Services</p>
                <p>Collaboration</p>
                <p>Media</p>
            </div>

            <div>
                <h2>More Info</h2>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Shipping Policy</p>
                <p>Sitemap</p>
            </div>

            <div>
                <h2>Location</h2>
                <p>support@blyze.com</p>
                <p>Address Line 1, State or Province, Country, Zip 912034</p>
                <p>State or Province, Country, Zip 912034</p>
            </div>

        </div>

        <div id="get-app">
            <div id="icons">
                <div>
                    <FaFacebookF id="icon"/>
                </div>
                <div>
                    <RxInstagramLogo id="icon"/>
                </div>
                <div>
                    <IoLogoTwitter id="icon"/>
                </div>
                <div>
                    <TiSocialLinkedin id="icon" />
                </div>
            
            </div>

            <div>
                <h3 id='down'>Download The App</h3>
            </div>
            

            <div id="download">
                
                <div id="google-play">
                    <div>
                        <FaGooglePlay id= "googleplay-icon" size={50}/>
                    </div>
                    <div>
                        <p id="available">android app on <h3 className='app'>Google Play</h3></p>
                    </div>
                </div>

                <div id="app-store">
                    <div>
                        <GiSmartphone id= "googleplay-icon" size={50}/>
                    </div>
                    <div>
                        <p id="available">Available on the <h3 className='app'>App Store</h3></p>
                    </div>
                </div>
            </div>
        </div>
            <hr></hr>

            <div id="popular">
                <div>
                    <h3>Popular Categories</h3> 
                </div>
                <div>
                <IoIosArrowDown id="drop-down"/>
                </div>
            </div>
            <hr></hr>
            <p className='copyright'>Copyright @ 2023 Blayze Company. All rights reserved.</p>
        



    </footer>
      

    )
}
export default Footer;