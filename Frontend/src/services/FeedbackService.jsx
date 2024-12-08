import axios from 'axios';

const FEEDBACK_API_BASE_URL = "http://localhost:8080/feedback";

export function getFeedbacks() {
    return axios.get(FEEDBACK_API_BASE_URL);
}

export function createFeedback(feedback) {
    return axios.post(FEEDBACK_API_BASE_URL, feedback);
}

export function getFeedbackById(feedbackId) {
    return axios.get(`${FEEDBACK_API_BASE_URL}/${feedbackId}`);
}

export function updateFeedback(feedback, feedbackId) {
    return axios.put(`${FEEDBACK_API_BASE_URL}/${feedbackId}`, feedback);
}

export function deleteFeedback(feedbackId) {
    return axios.delete(`${FEEDBACK_API_BASE_URL}/${feedbackId}`);
}