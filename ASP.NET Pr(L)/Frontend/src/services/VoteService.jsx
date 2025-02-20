import axios from "axios";
import { ADMIN_API_BASE_URL } from "../constants/ApiConstants"
import { API_BASE_URL } from "../constants/ApiConstants";

export function fetchAllVotes() {
    const test = axios.get(`${ADMIN_API_BASE_URL}/vote-records`);
    return test;
}

export function fetchVoteById(vote_id) {
    return axios.get(`${ADMIN_API_BASE_URL}/votes/${vote_id}`);
}

export function createVote(poll_id, vote) {
    return axios.post(`${API_BASE_URL}/polls/${poll_id}/vote`, vote);
}

// export function updateVote(vote_id, vote) {
//     return axios.put(`${ADMIN_API_BASE_URL}/vote-update/${vote_id}`, vote);
// }

// export function deleteVoteById(vote_id) {
//     return axios.delete(`${ADMIN_API_BASE_URL}/vote-delete/${vote_id}`);
// }