import React from "react";

function CompanyTable({ companies, onEdit, onDelete }) {

    return (

        <table className="table table-dark table-hover">

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Company</th>
                    <th>HR</th>
                    <th>Email</th>
                    <th>Package</th>
                    <th>CGPA</th>
                    <th>Actions</th>
                </tr>

            </thead>

            <tbody>

                {companies.map((company) => (

                    <tr key={company.company_id}>

                        <td>{company.company_id}</td>
                        <td>{company.company_name}</td>
                        <td>{company.hr_name}</td>
                        <td>{company.email}</td>
                        <td>{company.package}</td>
                        <td>{company.eligibility_cgpa}</td>

                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() => onEdit(company)}
                            >
                                ✏️ Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => onDelete(company.company_id)}
                            >
                                🗑 Delete
                            </button>

                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default CompanyTable;