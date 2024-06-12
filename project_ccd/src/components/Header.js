import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import  Logo from './image/ccd.jpg'



function Header(props)
{

    const [loc, setLoc] = useState(null)
    const [showOver, setshowOver] = useState(false)
    const navigate = useNavigate()



    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
    }
    const handlebanasthali = () => {
        // Replace 'desired-url' with the URL you want to open
        window.open('https://nupur142.github.io/Banasthali_Tour/', ''); // '_blank' will open the URL in a new tab/window
    };

    const handleButtonClick = () => {
        // Replace 'desired-url' with the URL you want to open
        window.open('https://ish2104.github.io/Profile_Page/', ''); // '_blank' will open the URL in a new tab/window
    };


    let locations = [
        {
            "latitude": 28.6139,
            "longitude": 77.2090,
            "placeName": "New Delhi, Delhi"
        },
        {
            "latitude": 19.0760,
            "longitude": 72.8777,
            "placeName": "Mumbai, Maharashtra"
        },
    ]
    return(
        <div className='header-container d-flex justify-content-between'>
            <div className = "header">
            <img src = {Logo} alt= "CAMPUS CART DEALS"  style={{ width: '50px', height: '50px', borderRadius: '30%' }}  />

            <span className='links' style={{ marginLeft: '10px' }}>Home</span> 
            {/* <Link className='links' to="/">  HOME </Link> */}
            <button onClick= {handlebanasthali} style={{ marginLeft: 'auto', marginRight: '10px' }}>BANASTHLI TOUR</button>


                {/* <span style={{ marginLeft: '10px' }}>Home</span> */}
                {/* <Link className='links' to="/home">  HOME </Link> */}

                <select value={loc} onChange={(e) => {
                    localStorage.setItem('userLoc', e.target.value)
                    setLoc(e.target.value)
                }} >

</select>
                <input className='search'
                    type='text'
                    value={props && props.search}
                    onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)
                    }
                />
                <button className='search-btn' onClick={(handleClick) => props.handleClick && props.handleClick()} > <FaSearch /> </button>
            </div>

            <div>





                <div 
                    onClick={() => {
                        setshowOver(!showOver)
                    }}
                    style={{
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center',
                         background: '#002f34',
                         width: '40px',
                         height: '40px',
                         color: '#fff',
                         fontSize: '14px',
                         borderRadius: '50%'
                     }} 
                    >
                    
                     CCD
                     </div>

                {showOver && <div style={{
                    minHeight: '100px',
                    width: '200px',
                    background: '#eee',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    zIndex: 1,
                    marginTop: '50px',
                    marginRight: '50px',
                    color: 'red',
                    fontSize: '14px',
                    background: '#002f34',
                    borderRadius: '7px'
                }}>
                    <div> 

                   

                    {!!localStorage.getItem('token') &&
                            <Link to="/add-product">
                                <button className="logout-btn">ADD PRODUCT  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to ="/liked-products">
                                <button className="logout-btn"> LIKED PRODUCTS </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to = "/my-products">
                                <button className="logout-btn">MY ADS  </button>
                            </Link>}
                    </div>

                    <div>
                        {!!localStorage.getItem('token') &&
                             <Link to="/https://ish2104.github.io/Profile_Page/">
                                <button onClick={handleButtonClick} className="logout-btn">PROFILE  </button>
                             </Link>} 
            
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                             <Link to="/feedback">
                                <button className="logout-btn">FEEDBACK  </button>
                             </Link>} 
            
                    </div>
                    <div>
                        {!localStorage.getItem('token') ?
                            <Link to="/login">  LOGIN </Link> :
                            <button className='logout-btn' onClick={handleLogout}>LOGOUT </button> }
                    </div>



                </div>}
            </div>
                 

                
                
            </div>

    )
           
}
export default Header;