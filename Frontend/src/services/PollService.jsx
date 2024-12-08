import axios from "axios";
import { ADMIN_API_BASE_URL } from "../constants/ApiConstants"

export function fetchAllPolls() {
    const test = axios.get(`${ADMIN_API_BASE_URL}/poll-records`);
    return test;
}

export function fetchPollById(poll_id) {
    return axios.get(`${ADMIN_API_BASE_URL}/poll-records/${poll_id}`);
}

export function createPoll(poll) {
    return axios.post(`${ADMIN_API_BASE_URL}/poll-create/save`, poll);
}

export function updatePoll(poll_id, poll) {
    return axios.put(`${ADMIN_API_BASE_URL}/candidate-update/${poll_id}`, poll);
}

export function deletePollById(poll_id) {
    return axios.delete(`${ADMIN_API_BASE_URL}/poll-delete/${poll_id}`);
}