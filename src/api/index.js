import axios from "axios";

export const API = axios.create({
    baseURL: 'http://localhost:3000/api', // Base URL without the endpoint path
});