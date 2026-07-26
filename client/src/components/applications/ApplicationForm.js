import React, { useState, useEffect } from "react";


function ApplicationForm({ onSubmit, editingApplication }) {


    const [application, setApplication] = useState({

        student_id: "",
        drive_id: "",
        status: "Applied",
        remarks: ""

    });



    useEffect(()=>{

        if(editingApplication){
            setApplication(editingApplication);
        }

    },[editingApplication]);



    const handleChange=(e)=>{

        setApplication({

            ...application,
            [e.target.name]: e.target.value

        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();

        onSubmit(application);


        setApplication({

            student_id:"",
            drive_id:"",
            status:"Applied",
            remarks:""

        });

    };



    return (

        <div className="card p-4 mb-4">

            <h4>
                {editingApplication ? "Update Application" : "Add Application"}
            </h4>


            <form onSubmit={handleSubmit}>


                <input

                    className="form-control mb-2"
                    name="student_id"
                    placeholder="Student ID"
                    value={application.student_id}
                    onChange={handleChange}

                />



                <input

                    className="form-control mb-2"
                    name="drive_id"
                    placeholder="Drive ID"
                    value={application.drive_id}
                    onChange={handleChange}

                />



                <select

                    className="form-control mb-2"
                    name="status"
                    value={application.status}
                    onChange={handleChange}

                >

                    <option value="Applied">
                        Applied
                    </option>

                    <option value="Shortlisted">
                        Shortlisted
                    </option>

                    <option value="Rejected">
                        Rejected
                    </option>

                    <option value="Selected">
                        Selected
                    </option>


                </select>



                <textarea

                    className="form-control mb-2"
                    name="remarks"
                    placeholder="Remarks"
                    value={application.remarks}
                    onChange={handleChange}

                />



                <button className="btn btn-primary">

                    {editingApplication ? "Update" : "Apply"}

                </button>


            </form>


        </div>

    );

}


export default ApplicationForm;