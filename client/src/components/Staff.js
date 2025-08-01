import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlinePreview, MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { FaUserEdit } from "react-icons/fa";

function Staff() {
  const [allstaff, setallstaff] = useState([]);
  const navigate = useNavigate();

  const allstafflist = () => {
    axios.get('http://localhost:8700/allstafflist').then((d)=>{
      setallstaff(d.data.allstaff)
    })
  }

  useEffect(()=>{
    allstafflist();
  },[])

  const deletestaffrecord = (id) => {
    if (window.confirm("do you wnat to delete")) {
      axios.delete(`http://localhost:8700/deletestaffrecord/${id}`).then((d) => {
        toast.success("record delete successfully");
        allstafflist();
      })
    } else {
      toast.warn("Thanks");
    }
  }

  return (
    <>
    <Header/>
    <Sidebar/>
    <ToastContainer position="top-right" autoClose={2000} />
    <div className="p-3 text-white bg-dark text-start">
        <button type='button' onClick={() => { navigate('/addstaff') }} className='btn btn-info text-white'>Add Employee</button>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <table className="table table-bordered border-primary v">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Emp Type</th>
                  <th scope="col">Emp Code</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Emp Img</th>
                  <th scope="col" className='text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allstaff.map((staff) => {
                  return (
                    <tr>
                      <td className='align-content-around'>{staff.empname}</td>
                      <td className='align-content-around'>{staff.contact}</td>
                      <td className='align-content-around'>{staff.emptype}</td>
                      <td className='align-content-around'>{staff.empcode}</td>
                      <td className='align-content-around'>{staff.designation}</td>
                      <td className='align-content-around'><img src={staff.empimg} width={50} height={50} alt='img' /></td>
                      <td className='align-content-around text-end'>
                        <Link to={`/staff/editstaff/${staff._id}`} className="badge text-bg-warning ms-2 code-i"><FaUserEdit /></Link>
                        <span className="badge text-bg-danger ms-2 code-i"  onClick={()=>deletestaffrecord(staff._id)}><MdDeleteForever /></span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Staff