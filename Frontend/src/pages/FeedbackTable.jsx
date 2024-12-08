import { useState, useEffect } from 'react';
import FeedbackService from '../services/FeedbackService';
import { Link } from 'react-router-dom';

const FeedbackListComponent = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        FeedbackService.getFeedbacks().then((res) => {
            setFeedbacks(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Feedback List</h2>
            <div className="row">
                <Link to="/add-feedback" className="btn btn-primary">Add Feedback</Link>
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
                                    <button className="btn btn-danger" onClick={() => FeedbackService.deleteFeedback(feedback.feedbackId).then(() => setFeedbacks(feedbacks.filter(fb => fb.feedbackId !== feedback.feedbackId)))}>Delete</button>
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
