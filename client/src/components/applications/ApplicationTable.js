import React from "react";


function ApplicationTable({
    applications,
    onDelete,
    setEditingApplication
}) {


    return (

        <table className="table table-bordered">


            <thead className="table-dark">

                <tr>

                    <th>Student ID</th>
                    <th>Drive ID</th>
                    <th>Status</th>
                    <th>Remarks</th>
                    <th>Actions</th>

                </tr>

            </thead>



            <tbody>


                {
                    applications.map((application)=>(


                        <tr key={application.application_id}>


                            <td>
                                {application.student_id}
                            </td>


                            <td>
                                {application.drive_id}
                            </td>


                            <td>
                                {application.status}
                            </td>


                            <td>
                                {application.remarks}
                            </td>


                            <td>


                                <button

                                    className="btn btn-warning btn-sm me-2"

                                    onClick={()=>
                                        setEditingApplication(application)
                                    }

                                >

                                    Edit

                                </button>



                                <button

                                    className="btn btn-danger btn-sm"

                                    onClick={()=>
                                        onDelete(application.application_id)
                                    }

                                >

                                    Delete

                                </button>


                            </td>


                        </tr>


                    ))
                }


            </tbody>


        </table>

    );

}


export default ApplicationTable;