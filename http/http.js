import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const Http = axios.create({
    baseURL : BASE_URL,
    headers : {
        Accept : "application/json",
        "Content-Type" : "application/json"
    },
    withCredentials : true
});

export default Http;