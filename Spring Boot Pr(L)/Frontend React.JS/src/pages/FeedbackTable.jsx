// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getFeedbacks } from '../services/FeedbackService';

// const FeedbackListComponent = () => {
//     const [feedbacks, setFeedbacks] = useState([]);

//     const getAllFeedbacks = async () => {
//         try {
//           const response = await getFeedbacks();
//           console.log(response.data);
//           setFeedbacks(response.data);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//     useEffect(() => {
//         getAllFeedbacks();
//     }, []);

//     return (
//         <div>
//             <h2 className="text-center">Feedback List</h2>
//             <div className="row">
//                 <Link to="/add-feedback" className="btn btn-primary">Add Feedback</Link>
//             </div>
//             <div className="row">
//                 <table className="table table-striped table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Feedback Message</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {feedbacks.map(feedback => (
//                             <tr key={feedback.feedbackId}>
//                                 <td>{feedback.message}</td>
//                                 <td>
//                                     <Link to={`/update-feedback/${feedback.feedbackId}`} className="btn btn-info">Update</Link>
//                                     <button className="btn btn-danger" onClick={() => FeedbackService.deleteFeedback(feedback.feedbackId).then(() => setFeedbacks(feedbacks.filter(fb => fb.feedbackId !== feedback.feedbackId)))}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default FeedbackListComponent;




import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeedbacks } from '../services/FeedbackService';
import {jwtDecode} from "jwt-decode"; // To decode JWT

const FeedbackListComponent = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [role, setRole] = useState(null); // Store role from JWT

    const getAllFeedbacks = async () => {
        try {
            const response = await getFeedbacks();
            console.log(response.data);
            setFeedbacks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getUserRole = () => {
        const token = localStorage.getItem('jwtToken'); // Assuming token is stored in localStorage
        if (token) {
            try {
                const decodedToken = jwt_decode(token);
                setRole(decodedToken.role); // Assuming "role" is stored inside JWT
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    };

    useEffect(() => {
        getAllFeedbacks();
        getUserRole(); // Extract role when component loads
    }, []);

    return (
        <div>
            <h2 className="text-center">Feedback List</h2>
            <div className="row">
                {role === "Voter" && (
                    <Link to="/add-feedback" className="btn btn-primary">Add Feedback</Link>
                )}
                {role === "Admin" && (
                    <button className="btn btn-secondary" disabled>
                        Add Feedback (Disabled)
                    </button>
                )}
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Feedback Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map(feedback => (
                            <tr key={feedback.feedbackId}>
                                <td>{feedback.message}</td>
                                <td>
                                    <Link to={`/update-feedback/${feedback.feedbackId}`} className="btn btn-info">Update</Link>
                                    <button className="btn btn-danger" onClick={() => 
                                        FeedbackService.deleteFeedback(feedback.feedbackId)
                                            .then(() => setFeedbacks(feedbacks.filter(fb => fb.feedbackId !== feedback.feedbackId)))
                                    }>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeedbackListComponent;
