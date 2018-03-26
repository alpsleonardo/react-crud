import axios from "axios";

export const client = axios.create({
    // baseURL: "http://localhost:3030",
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json"
    }
})
