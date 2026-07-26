import React, { useState, useEffect } from "react";

function CompanyForm({ onSave, editingCompany }) {

    const [company, setCompany] = useState({

        company_name: "",
        hr_name: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        package: 0,
        eligibility_cgpa: 0

    });

    useEffect(() => {

        if (editingCompany) {

            setCompany(editingCompany);

        }

    }, [editingCompany]);

    const handleChange = (e) => {

        setCompany({

            ...company,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(company);

    };

    return (

        <form onSubmit={handleSubmit}>

            <div className="row">

                <div className="col-md-6 mb-3">
                    <label>Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="company_name"
                        value={company.company_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>HR Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="hr_name"
                        value={company.hr_name}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={company.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={company.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Website</label>
                    <input
                        type="text"
                        className="form-control"
                        name="website"
                        value={company.website}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Package (LPA)</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="package"
                        value={company.package}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Eligibility CGPA</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="eligibility_cgpa"
                        value={company.eligibility_cgpa}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label>Address</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        name="address"
                        value={company.address}
                        onChange={handleChange}
                    />
                </div>

            </div>

            <div className="text-end">

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Save Company
                </button>

            </div>

        </form>

    );

}

export default CompanyForm;