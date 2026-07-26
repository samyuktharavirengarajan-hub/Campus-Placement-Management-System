import axios from "axios";

const API_URL = "http://localhost:5000/api/drives";


export const getDrives = () => {
    return axios.get(API_URL);
};


export const addDrive = (drive) => {
    return axios.post(API_URL, drive);
};


export const updateDrive = (id, drive) => {
    return axios.put(`${API_URL}/${id}`, drive);
};


export const deleteDrive = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};