import React from "react";


function DriveTable({ drives, onDelete, setEditingDrive }){


    return(

        <table className="table table-bordered">

            <thead className="table-dark">

                <tr>
                    <th>Company</th>
                    <th>Drive Title</th>
                    <th>Date</th>
                    <th>Deadline</th>
                    <th>Venue</th>
                    <th>Actions</th>
                </tr>

            </thead>


            <tbody>


            {
                drives.map((drive)=>(

                    <tr key={drive.drive_id}>


                        <td>
                            {drive.company_name || drive.company_id}
                        </td>


                        <td>
                            {drive.drive_title}
                        </td>


                        <td>
                            {drive.drive_date}
                        </td>


                        <td>
                            {drive.application_deadline}
                        </td>


                        <td>
                            {drive.venue}
                        </td>


                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={()=>setEditingDrive(drive)}
                            >
                                Edit
                            </button>


                            <button
                                className="btn btn-danger btn-sm"
                                onClick={()=>onDelete(drive.drive_id)}
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


export default DriveTable;