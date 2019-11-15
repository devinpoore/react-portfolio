import axios from "axios";

const api = {
    sendEmail: (emailObj) => {
        return axios.post("https://dp-portfolio-api.herokuapp.com/email", emailObj);
    },
    sendSms: (smsObj) => {
        return axios.post("https://dp-portfolio-api.herokuapp.com/sms", smsObj);
    }
};

export default api;