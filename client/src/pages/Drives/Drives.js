import React, {useEffect, useState} from "react";

import DriveForm from "../../components/drives/DriveForm";
import DriveTable from "../../components/drives/DriveTable";

import {
    getDrives,
    addDrive,
    updateDrive,
    deleteDrive
} from "../../services/driveService";


function Drives(){

    const [drives,setDrives] = useState([]);
    const [editingDrive,setEditingDrive] = useState(null);


    const loadDrives = () => {

        getDrives()
        .then(res=>{
            setDrives(res.data);
        })
        .catch(err=>{
            console.log(err);
        });

    };


    useEffect(()=>{
        loadDrives();
    },[]);


    const handleSubmit = (drive)=>{

        if(editingDrive){

            updateDrive(editingDrive.drive_id,drive)
            .then(()=>{
                setEditingDrive(null);
                loadDrives();
            });

        }
        else{

            addDrive(drive)
            .then(()=>{
                loadDrives();
            });

        }

    };


    const handleDelete=(id)=>{

        deleteDrive(id)
        .then(()=>{
            loadDrives();
        });

    };


    return(
        <div className="container mt-4">

            <h2 className="mb-4">
                Placement Drives
            </h2>


            <DriveForm
                onSubmit={handleSubmit}
                editingDrive={editingDrive}
            />


            <DriveTable
                drives={drives}
                onDelete={handleDelete}
                setEditingDrive={setEditingDrive}
            />

        </div>
    );

}


export default Drives;