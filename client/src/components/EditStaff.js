import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditStaff() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setuser] = useState({
        empname: "",
        contact: "",
        emptype: "",
        empcode: "",
        designation: "",
        empimg: ""
    });

 
    const singlestaffdata = async () => {
        try {
            const res = await axios.get(`http://localhost:8700/singlestaffrecord/${id}`);
            setuser(res.data.mydata); // ✅ use correct key (mydata)
        } catch (error) {
            console.error("Error fetching book:", error);
            toast.error("Failed to load book");
        }
    };

    useEffect(() => {
        singlestaffdata();
    }, [id]);

    const updatefield = (e) => {
        const { name, value } = e.target;
        setuser((preval) => ({
            ...preval,
            [name]: value
        }));
    };

    // ✅ Update book using PATCH
    const updatestaff = async () => {
        if (user.empname === "") {
            toast.error("staff title is blank", { position: "top-left", autoClose: 1000 });
            return;
        }

        try {
            const res = await fetch(`http://localhost:8700/updatestaff/${id}`, {
                method: "PATCH", // ✅ PATCH not POST
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });

            const data = await res.json();

            if (data.status === 251) {
                toast.success("Successfully updated book", { position: "top-left", autoClose: 2000 });
                setTimeout(() => {
                    navigate("/staff");
                }, 2000);
            } else {
                toast.error("Update failed");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong while updating");
        }
    };

    return (
        <>
            <Header />
            <Sidebar />
            <div className='container p-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='container-fluid bg-white p-5'>
                            <div className='row'>
                                <div className='col-12 text-center'>
                                    <h3 className='text-dark fw-bold'>Edit Staff</h3>
                                    <ToastContainer />
                                    <hr />
                                </div>

                                {/* Form fields */}
                                {[
                                    { label: "Emp Name", name: "empname" },
                                    { label: "Contact", name: "contact" },
                                    { label: "Emp Type", name: "emptype" },
                                    { label: "Emp Code", name: "empcode" },
                                    { label: "Designation", name: "designation" },
                                    { label: "Emp Img", name: "empimg", placeholder: "url only" }
                                ].map((field, i) => (
                                    <div className='col-md-6' key={i}>
                                        <div className="mb-3">
                                            <label className="form-label text-dark">{field.label}</label>
                                            <input
                                                type="text"
                                                className="form-control bg-body-secondary text-dark p-2"
                                                name={field.name}
                                                placeholder={field.placeholder || ""}
                                                value={user[field.name]}
                                                onChange={updatefield}
                                            />
                                        </div>
                                    </div>
                                ))}

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <input type='button' value="Update Book" className='btn btn-success' onClick={updatestaff} />
                                        <input type='reset' value="Cancel" className='btn btn-danger ms-3' onClick={() => navigate('/staff')} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditStaff;
