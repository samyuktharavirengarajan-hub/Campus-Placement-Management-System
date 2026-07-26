import React, { useEffect, useState } from "react";

function StudentForm({ student: editStudent, onSave }) {

    const [student, setStudent] = useState({
        register_number: "",
        full_name: "",
        email: "",
        phone: "",
        department: "",
        tenth_percentage: 0,
        twelfth_percentage: 0,
        cgpa: 0,
        current_backlogs: 0,
        skills: "",
        github_url: "",
        linkedin_url: "",
        resume_url: ""
    });

    useEffect(() => {

        if (editStudent) {

            setStudent({
                register_number: editStudent.register_number || "",
                full_name: editStudent.full_name || "",
                email: editStudent.email || "",
                phone: editStudent.phone || "",
                department: editStudent.department || "",
                tenth_percentage: editStudent.tenth_percentage || 0,
                twelfth_percentage: editStudent.twelfth_percentage || 0,
                cgpa: editStudent.cgpa || 0,
                current_backlogs: editStudent.current_backlogs || 0,
                skills: editStudent.skills || "",
                github_url: editStudent.github_url || "",
                linkedin_url: editStudent.linkedin_url || "",
                resume_url: editStudent.resume_url || ""
            });

        } else {

            setStudent({
                register_number: "",
                full_name: "",
                email: "",
                phone: "",
                department: "",
                tenth_percentage: 0,
                twelfth_percentage: 0,
                cgpa: 0,
                current_backlogs: 0,
                skills: "",
                github_url: "",
                linkedin_url: "",
                resume_url: ""
            });

        }

    }, [editStudent]);

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(student);

    };

    return (

        <form onSubmit={handleSubmit}>

            <div className="row">

                <div className="col-md-6 mb-3">
                    <label>Register Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="register_number"
                        value={student.register_number}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        value={student.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={student.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Department</label>
                    <input
                        type="text"
                        className="form-control"
                        name="department"
                        value={student.department}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>CGPA</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="cgpa"
                        value={student.cgpa}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>10th Percentage</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="tenth_percentage"
                        value={student.tenth_percentage}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>12th Percentage</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="twelfth_percentage"
                        value={student.twelfth_percentage}
                        onChange={handleChange}
                    />
                </div>

            </div>

            <div className="text-end">

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    {editStudent ? "Update Student" : "Save Student"}
                </button>

            </div>

        </form>

    );

}

export default StudentForm;