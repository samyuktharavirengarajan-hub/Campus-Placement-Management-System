import React, { useEffect, useState } from "react";
import StudentTable from "../../components/students/StudentTable";
import StudentForm from "../../components/students/StudentForm";

import {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} from "../../services/studentService";

function Students() {

    const [students, setStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {

        try {

            const response = await getStudents();

            setStudents(response.data);

        } catch (error) {

            console.error("Student Fetch Error:", error);

        }

    };

    const handleEdit = (student) => {

        setEditingStudent(student);

        setShowModal(true);

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this student?")) return;

        try {

            await deleteStudent(id);

            alert("Student Deleted Successfully ✅");

            fetchStudents();

        } catch (error) {

            console.error(error);

            alert("Delete Failed");

        }

    };

    const handleSaveStudent = async (student) => {

        try {

            if (editingStudent) {

                await updateStudent(editingStudent.student_id, student);

                alert("Student Updated Successfully ✅");

            } else {

                await addStudent(student);

                alert("Student Added Successfully ✅");

            }

            setShowModal(false);
            setEditingStudent(null);

            fetchStudents();

        } catch (error) {

            console.error(error);

            alert("Operation Failed");

        }

    };

    return (

        <div>

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2>👨‍🎓 Students Management</h2>

                    <p className="text-secondary">
                        Manage all student records
                    </p>

                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => {

                        setEditingStudent(null);

                        setShowModal(true);

                    }}
                >
                    + Add Student
                </button>

            </div>

            <StudentTable
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            {

                showModal && (

                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    >

                        <div className="modal-dialog modal-lg">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h5 className="modal-title">

                                        {
                                            editingStudent
                                                ? "Edit Student"
                                                : "Add Student"
                                        }

                                    </h5>

                                    <button
                                        className="btn-close"
                                        onClick={() => {

                                            setShowModal(false);
                                            setEditingStudent(null);

                                        }}
                                    ></button>

                                </div>

                                <div className="modal-body">

                                    <StudentForm
                                        student={editingStudent}
                                        onSave={handleSaveStudent}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                )

            }

        </div>

    );

}

export default Students;