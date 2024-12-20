import axios from "axios";

export const API = axios.create({
    baseURL: 'https://dummyjson.com', // Base URL without the endpoint path
});