import axios from "axios";
import { API_BASE_URL } from "../constants/ApiConstants";

//  Cast a vote for a candidate
export function createVote(voteDto) {
    return axios.post(`${API_BASE_URL}/votes`, voteDto);
}
