import axios from "axios";

const quoteApi = axios.create({
    baseURL: "https://httpstatusdogs.com/",
});

const catApi = axios.create({
    baseURL: "https://httpstatusdogs.com/",
});

export { quoteApi, catApi };