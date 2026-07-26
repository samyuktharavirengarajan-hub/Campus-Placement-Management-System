CREATE DATABASE cpms;
USE cpms;
CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    register_number VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15) NOT NULL,
    department VARCHAR(50) NOT NULL,
    tenth_percentage DECIMAL(5,2) NOT NULL,
    twelfth_percentage DECIMAL(5,2) NOT NULL,
    cgpa DECIMAL(3,2) NOT NULL,
    current_backlogs INT DEFAULT 0,
    skills TEXT,
    github_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    resume_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    package_lpa DECIMAL(5,2),
    eligibility_cgpa DECIMAL(3,2),
    job_role VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE placement_drives (
    drive_id INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT NOT NULL,
    drive_title VARCHAR(100) NOT NULL,
    drive_date DATE NOT NULL,
    application_deadline DATE NOT NULL,
    venue VARCHAR(100),
    description TEXT,
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);
CREATE TABLE applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    drive_id INT NOT NULL,
    application_date DATE DEFAULT (CURRENT_DATE),
    status ENUM(
        'Applied',
        'Shortlisted',
        'Interview',
        'Selected',
        'Rejected'
    ) DEFAULT 'Applied',
    remarks VARCHAR(255),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (drive_id) REFERENCES placement_drives(drive_id)
);
CREATE TABLE admins (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admins(full_name,email,password)
VALUES(
'Placement Officer',
'admin@cpms.com',
'admin123'
);

UPDATE admins
SET password='$2b$10$yq6gKn0bVOjiXuxiz0L12.eubhr6ktuEEMag2vXkPv5CoEFqPHFj.'
WHERE admin_id=1;

SELECT * FROM students;

DELETE FROM applications
WHERE student_id = 2;

DELETE FROM students
WHERE student_id = 2;