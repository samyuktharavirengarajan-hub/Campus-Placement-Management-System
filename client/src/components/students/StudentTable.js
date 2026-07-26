import React from "react";

function StudentTable({ students, onEdit, onDelete }) {

    return (

        <table className="table table-dark table-hover">

            <thead>

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Register No</th>
                    <th>Department</th>
                    <th>CGPA</th>
                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    students.map((student) => (

                        <tr key={student.student_id}>

                            <td>{student.student_id}</td>

                            <td>{student.full_name}</td>

                            <td>{student.register_number}</td>

                            <td>{student.department}</td>

                            <td>{student.cgpa}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(student)}
                                >
                                    ✏️ Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(student.student_id)}
                                >
                                    🗑 Delete
                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default StudentTable;