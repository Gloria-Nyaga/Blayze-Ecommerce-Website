import './index.css';
import logo from '../Images/logo.png';
import { CiLocationOn } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";


const Introduction = () =>{
    return (
        <body>
            <div id= "Navbar">
                <img id= "logo-pic" src ={logo} alt= "Blayz Logo"/>

                <div id= "location-info">
                    <CiLocationOn  id= "location-icon"/>
                    <input type="text" id="location-input" placeholder='Santoshpur, New Market Area'></input>
                    <GoPencil id="pencil" />

                </div>

                <div>
                    <FiSearch />
                    <input type="text" id="search" placeholder='Search'></input>
                </div>

                <div>
                    <CgShoppingCart />
                    <p>Cart</p>
                </div>

                <div>
                    <CgProfile />
                </div>

            </div>

            <div id="Landing-page">
                <div>
                    <h1 id="text">Grab upto 20% Off on Selected Categories</h1>
                    <button>Buy Now</button>
                </div>
            </div>

            <div id="organized-by">
                <div id="dropdown">
                    <p>Categories</p>
                    <FaChevronDown className='down'/>
                </div>
                <div id="dropdown">
                    <p>BusinessType</p>
                    <FaChevronDown className='down'/>
                </div>
                <div id="dropdown">
                    <p>ServiceType</p>
                    <FaChevronDown className='down'/>
                </div>


                <div className='filter-info'>
                    <p>Category 1</p>
                    <CiFilter className='filter'/>
                </div>
                
            </div>
            <div id= "Freatured-products">
                <h2>Featured Products</h2>
                <div>
                    <p>Green Dragon Gold Platinum OG</p>
                    <span><p>$45</p></span>
                    <p>THC 14.38% CBD 10.20%</p>

                </div>

                <div>
                    <p>Green Dragon Gold Platinum OG</p>
                    <span><p>$45</p></span>
                    <p>THC 14.38% CBD 10.20%</p>

                </div>

                <div>
                    <p>Green Dragon Gold Platinum OG</p>
                    <span><p>$45</p></span>
                    <p>THC 14.38% CBD 10.20%</p>

                </div>

                <div>
                    <p>Green Dragon Gold Platinum OG</p>
                    <span><p>$45</p></span>
                    <p>THC 14.38% CBD 10.20%</p>

                </div>

            </div>

            <div id="discount-page">
                <div className='discount'>
                    <div>
                        <img alt="item"></img>
                        <h1>GET UPTO 40% OFF</h1>
                        <button>Get Discount</button>
                        <img alt="item"></img>
                    </div>
                    <div>
                        <h2>Latest Launched</h2>
                        <p>Lorem Ipsum Idol</p>
                        <img alt="item"></img>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Green Dragon Gold Platinum OG</p>
                        <span><p>$45</p></span>
                        <p>THC 14.38% CBD 10.20%</p>

                    </div>

                    <div>
                        <p>Green Dragon Gold Platinum OG</p>
                        <span><p>$45</p></span>
                        <p>THC 14.38% CBD 10.20%</p>

                    </div>

                </div>

            </div>





           
        </body>
    )
}

export default Introduction;