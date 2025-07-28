import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Addstaff() {

    const navigate = useNavigate()

    const [user, setuser] = useState({
        empname: "",
        contact: "",
        emptype: "",
        empcode: "",
        designation: "",
        empimg: ""
    });

    const updatefield = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;
        setuser((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addstaff = async (req, res) => {
        if (user.empname === "") {
            toast.error("name is blank", { position: "top-left", autoClose: 1000 });
        }
        else {
            const { empname, contact, emptype, empcode, designation, empimg } = user;
            const postdata = await fetch("http://localhost:8700/addstaff", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    empname, contact, emptype, empcode, designation, empimg
                })
            })
            const data = await postdata.json();
            console.log(data.status);
            if (data.status === 255) {
                toast.success("successfully add book", { position: "top-left", autoClose: 2000 });
                setTimeout(() => {
                    navigate("/staff");
                }, 2000)
            }
        }

    }
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
                                    <h3 className='text-dark fw-bold'>Add Employee</h3>
                                    <ToastContainer />
                                    <hr />
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Emp Name</label>
                                        <input value={user.booktitle} type="text" className="form-control bg-body-secondary text-dark p-2" name='empname' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Contact</label>
                                        <input value={user.library} type="text" className="form-control bg-body-secondary text-dark p-2" name='contact' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Emp Type</label>
                                        <input value={user.booktype} type="text" className="form-control bg-body-secondary text-dark p-2" name='emptype' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Emp Code</label>
                                        <input value={user.author} type="text" className="form-control bg-body-secondary text-dark p-2" name='empcode' onInput={updatefield} />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Designation</label>
                                        <input value={user.accessionno} type="text" className="form-control bg-body-secondary text-dark p-2" name='designation' onInput={updatefield} />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Emp Img</label>
                                        <input value={user.bookimg} type="text" className="form-control bg-body-secondary text-dark p-2" placeholder='url only' name='empimg' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <input type='button' value="Add Employee" className='btn btn-success' onClick={addstaff}/>
                                        <input type='reset' value="Cancel" className='btn btn-danger ms-3' onClick={()=>navigate('/staff')}/>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addstaff