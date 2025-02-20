import axios from "axios";
import { ADMIN_API_BASE_URL } from "../constants/ApiConstants"

export function fetchAllCandidates() {
    const test = axios.get(`${ADMIN_API_BASE_URL}/candidate-records`);
    return test;
}

export function fetchCandidateById(candidate_id) {
    return axios.get(`${ADMIN_API_BASE_URL}/candidate-records/${candidate_id}`);
}

export function createCandidate(candidate) {
    return axios.post(`${ADMIN_API_BASE_URL}/candidate-create/save`, candidate);
}

export function updateCandidate(candidate_id, candidate) {
    return axios.put(`${ADMIN_API_BASE_URL}/candidate-update/${candidate_id}`, candidate);
}

export function deleteCandidateById(candidate_id) {
    return axios.delete(`${ADMIN_API_BASE_URL}/candidate-delete/${candidate_id}`);
}