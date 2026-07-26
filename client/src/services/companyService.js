import api from "./api";

export const getCompanies = () => {
    return api.get("/companies");
};

export const addCompany = (company) => {
    return api.post("/companies", company);
};

export const updateCompany = (id, company) => {
    return api.put(`/companies/${id}`, company);
};

export const deleteCompany = (id) => {
    return api.delete(`/companies/${id}`);
};