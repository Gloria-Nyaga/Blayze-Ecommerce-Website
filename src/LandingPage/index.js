import './index.css';
import logo from '../Images/logo.png';
import girl from '../Images/girl.png'
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
                    <FiSearch id="search-icon" />
                    <input type="text" id="search" placeholder='Search'></input>
                </div>

                <div id="cart">
                    <CgShoppingCart  id = "shoppingcart-icon"/>
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

                <div>
                    <img id= "girl-pic" src ={girl} alt= "Girl Logo"/>
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
                    <p>Category1</p>
                    <CiFilter className='filter'/>
                </div>
                
            </div>

            <h1>Featured Products</h1>
           
        </body>
    )
}

export default Introduction;