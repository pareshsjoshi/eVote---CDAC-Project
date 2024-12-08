import axios from 'axios';

const FEEDBACK_API_BASE_URL = "http://localhost:8080/api/feedback";

class FeedbackService {
    getFeedbacks() {
        return axios.get(FEEDBACK_API_BASE_URL);
    }

    createFeedback(feedback) {
        return axios.post(FEEDBACK_API_BASE_URL, feedback);
    }

    getFeedbackById(feedbackId) {
        return axios.get(`${FEEDBACK_API_BASE_URL}/${feedbackId}`);
    }

    updateFeedback(feedback, feedbackId) {
        return axios.put(`${FEEDBACK_API_BASE_URL}/${feedbackId}`, feedback);
    }

    deleteFeedback(feedbackId) {
        return axios.delete(`${FEEDBACK_API_BASE_URL}/${feedbackId}`);
    }
}

export default new FeedbackService();
