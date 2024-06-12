import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API_URL from "../constants";

function Feedback() {
    const [rating, setRating] = useState(0);
    const [suggestion, setSuggestion] = useState('');

    const handleFeedbackSubmission = () => {
        // You can send the feedback data to your backend here
        console.log("Rating:", rating);
        console.log("Suggestion:", suggestion);
        // You can also perform validation before submission if needed

        // Clear the form after submission
        setRating(0);
        setSuggestion('');
        alert("Thank you for your feedback!");
    };

    return (
        <div>
            <div className="p-3 m-3">
                <h3> Feedback </h3>
                <br />
                <div className="form-group">
                    <label>Rating:</label>
                    <select className="form-control" value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                        <option value={0}>Select</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Suggestions:</label>
                    <textarea className="form-control" rows="4" value={suggestion} onChange={(e) => setSuggestion(e.target.value)}></textarea>
                </div>
                <button className="btn btn-primary mr-3" onClick={handleFeedbackSubmission}>Submit Feedback</button>
                <Link className="m-3" to="/">Back to Home</Link>
            </div>
        </div>
    );
}

export default Feedback;
