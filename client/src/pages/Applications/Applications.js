import React, {useEffect, useState} from "react";


import ApplicationForm from "../../components/applications/ApplicationForm";
import ApplicationTable from "../../components/applications/ApplicationTable";


import {
    getApplications,
    addApplication,
    updateApplication,
    deleteApplication
} from "../../services/applicationService";



function Applications(){


    const [applications,setApplications] = useState([]);

    const [editingApplication,setEditingApplication] = useState(null);



    const loadApplications = ()=>{

        getApplications()
        .then(res=>{
            setApplications(res.data);
        })
        .catch(err=>{
            console.log(err);
        });

    };



    useEffect(()=>{

        loadApplications();

    },[]);



    const handleSubmit=(application)=>{


        if(editingApplication){

            updateApplication(
                editingApplication.application_id,
                application
            )
            .then(()=>{
                setEditingApplication(null);
                loadApplications();
            });


        }
        else{


            addApplication(application)
            .then(()=>{
                loadApplications();
            });


        }


    };



    const handleDelete=(id)=>{


        deleteApplication(id)
        .then(()=>{
            loadApplications();
        });


    };




    return(

        <div className="container mt-4">


            <h2>
                Student Applications
            </h2>



            <ApplicationForm
                onSubmit={handleSubmit}
                editingApplication={editingApplication}
            />



            <ApplicationTable
                applications={applications}
                onDelete={handleDelete}
                setEditingApplication={setEditingApplication}
            />


        </div>

    );

}


export default Applications;