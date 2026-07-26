import React, { useState, useEffect } from "react";


function DriveForm({ onSubmit, editingDrive }) {


    const [drive, setDrive] = useState({
        company_id: "",
        drive_title: "",
        drive_date: "",
        application_deadline: "",
        venue: "",
        description: ""
    });


    useEffect(()=>{

        if(editingDrive){
            setDrive(editingDrive);
        }

    },[editingDrive]);



    const handleChange=(e)=>{

        setDrive({
            ...drive,
            [e.target.name]: e.target.value
        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();

        onSubmit(drive);

        setDrive({
            company_id:"",
            drive_title:"",
            drive_date:"",
            application_deadline:"",
            venue:"",
            description:""
        });

    };



    return(

        <div className="card p-4 mb-4">

            <h4>
                {editingDrive ? "Update Drive" : "Add Placement Drive"}
            </h4>


            <form onSubmit={handleSubmit}>


                <input
                    className="form-control mb-2"
                    name="company_id"
                    placeholder="Company ID"
                    value={drive.company_id}
                    onChange={handleChange}
                />


                <input
                    className="form-control mb-2"
                    name="drive_title"
                    placeholder="Drive Title"
                    value={drive.drive_title}
                    onChange={handleChange}
                />


                <label>Drive Date</label>
                <input
                    type="date"
                    className="form-control mb-2"
                    name="drive_date"
                    value={drive.drive_date}
                    onChange={handleChange}
                />


                <label>Application Deadline</label>
                <input
                    type="date"
                    className="form-control mb-2"
                    name="application_deadline"
                    value={drive.application_deadline}
                    onChange={handleChange}
                />


                <input
                    className="form-control mb-2"
                    name="venue"
                    placeholder="Venue"
                    value={drive.venue}
                    onChange={handleChange}
                />


                <textarea
                    className="form-control mb-2"
                    name="description"
                    placeholder="Description"
                    value={drive.description}
                    onChange={handleChange}
                />


                <button className="btn btn-primary">
                    {editingDrive ? "Update" : "Add Drive"}
                </button>


            </form>

        </div>

    );

}


export default DriveForm;