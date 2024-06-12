import React, { useEffect } from 'react';
import './Firstpage.css'; // Import CSS file
//import Secondpage from "./Secondpage";
import './Secondpage.js';




function LoadingPage() {
    useEffect(() => {
        const timer = setTimeout(() => {

            window.location.href = "Secondpage";
        }, 3000); // 6000 milliseconds = 6 seconds

        // Cleanup function to clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures the effect runs only once after mount

    return (
        <div className="bodyfirst">
        <div className="container">
            <h3><i>Loading deals & thrills... </i></h3>
            <div className="progress">
                <div className="color"></div>
            </div>
        </div>
        </div>
    );
}


export default LoadingPage;