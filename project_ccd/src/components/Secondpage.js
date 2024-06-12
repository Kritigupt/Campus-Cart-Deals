import React from 'react';
import './Second.css'; // Import CSS file
import  Logo from './image/ccd.jpg';
import { Link } from "react-router-dom";

// function StartExploring() {
//     return (
//         <div>
//             {/* Add your logo here */}
//             <div className="logo">
//                 <img src={Logo} alt="Your Website Logo" />
//             </div>
//             {/* Heading */}
//             <div className="heading-wrapper">
//                 <h1 className="heading">Campus Cart Deals</h1>
//             </div>
//             {/* Button */}
//             <div className="wrapper">
//                 <div className="link_wrapper">
//                 <Link to="/home">Campus Cart Deals</Link>
//                     {/* <a href="#">Explore more!</a> */}
//                     <div className="icon">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
//                             <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default StartExploring;


function StartExploring() {
    return (
        <div className="page-container"> {/* Add a class for the page container */}
            {/* Add your logo here */}
            <div className="logo">
                <img src={Logo} alt="Your Website Logo" />
            </div>
            {/* Heading */}
            <div className="heading-wrapper">
                <h1 className="heading">Campus Cart Deals</h1>
            </div>
            {/* Button */}
            <div className="wrapper">
                <div className="link_wrapper">
                    <Link to="/home">Campus Cart Deals</Link>
                    {/* <a href="#">Explore more!</a> */}
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartExploring;
