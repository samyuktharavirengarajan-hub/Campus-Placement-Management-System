import React, { useEffect, useState } from "react";

import CompanyForm from "../../components/companies/CompanyForm";
import CompanyTable from "../../components/companies/CompanyTable";
import {
    getCompanies,
    addCompany,
    updateCompany,
    deleteCompany
} from "../../services/companyService";


function Companies() {

    const [companies, setCompanies] = useState([]);

    const [editingCompany, setEditingCompany] = useState(null);


    // Fetch companies
    const loadCompanies = async () => {

        try {

            const res = await getCompanies();
            setCompanies(res.data);

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {

        loadCompanies();

    }, []);



    // Add / Update
    const handleSave = async (company) => {

        try {

            if (editingCompany) {

                await updateCompany(
                    editingCompany.company_id,
                    company
                );

                setEditingCompany(null);

            } 
            else {

                await addCompany(company);

            }


            loadCompanies();


        } catch(error) {

            console.log(error);

        }

    };



    // Edit
    const handleEdit = (company) => {

        setEditingCompany(company);

    };



    // Delete
    const handleDelete = async(id)=>{

        try {

            await deleteCompany(id);

            loadCompanies();

        }
        catch(error){

            console.log(error);

        }

    };



    return (

        <div className="container mt-4">

    <h2 className="mb-4">
        Company Management
    </h2>

    <CompanyForm
        onSave={handleSave}
        editingCompany={editingCompany}
    />

    <hr/>

    <CompanyTable
        companies={companies}
        onEdit={handleEdit}
        onDelete={handleDelete}
    />

</div>

    );

}


export default Companies;