import axios from "axios";

const api = {
    sendEmail: (emailObj) => {
        return axios.post("http://localhost:4500/email", emailObj);
    },
    sendSms: (smsObj) => {
        return axios.post("http://localhost:4500/email", smsObj);
    }
};

export default api;