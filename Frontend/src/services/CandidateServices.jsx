import axios from "axios";
import { CANDIDATE_API_URL } from "../constants/ApiConstants"
class CandidateServices {

    fetchAllCandidates() {
        const test = axios.get(`${CANDIDATE_API_URL}`);
        console.log(test);
        return test;
    }

    fetchCandidateById(candidate_id) {
        return axios.get(`${CANDIDATE_API_URL}/${candidate_id}`);
    }

    createCandidate(candidate) {
        return axios.post(`${CANDIDATE_API_URL}/add`, candidate);
    }

    updateCandidate(candidate_id, candidate) {
        return axios.put(`${CANDIDATE_API_URL}/update/${candidate_id}`, candidate);
    }

    deleteCandidateById(candidate_id) {
        return axios.get(`${CANDIDATE_API_URL}/delete/${candidate_id}`);
    }
}

export default new CandidateServices;