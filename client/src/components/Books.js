import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlinePreview, MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { FaUserEdit } from "react-icons/fa";

function Books() {
  const [allbooks, setallbooks] = useState([]);
  const navigate = useNavigate();
  const myallbooks = () => {
    axios.get('http://localhost:8700/allbooklist').then((d) => {
      setallbooks(d.data.allbook)
    })
  }

  useEffect(() => {
    myallbooks();
  }, [])

  const deleterecord = (id) => {
    if (window.confirm("do you wnat to delete")) {
      axios.delete(`http://localhost:8700/deleterecord/${id}`).then((d) => {
        toast.success("record delete successfully");
        myallbooks();
      })
    } else {
      toast.warn("Thanks");
    }
  }


  return (
    <>
      <Header />
      <Sidebar />
      <div className="p-3 text-white bg-dark text-start">
        <button type='button' onClick={() => { navigate('/addbook') }} className='btn btn-info text-white'>Add Books</button>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <table className="table table-bordered border-primary v">
              <thead>
                <tr>
                  <th scope="col">Book Title</th>
                  <th scope="col">Library</th>
                  <th scope="col">Book Type</th>
                  <th scope="col">Author</th>
                  <th scope="col">Accession No</th>
                  <th scope="col">Book Img</th>
                  <th scope="col" className='text-end'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allbooks.map((book) => {
                  return (
                    <tr>
                      <td className='align-content-around'>{book.booktitle}</td>
                      <td className='align-content-around'>{book.library}</td>
                      <td className='align-content-around'>{book.booktype}</td>
                      <td className='align-content-around'>{book.author}</td>
                      <td className='align-content-around'>{book.accessionno}</td>
                      <td className='align-content-around'><img src={book.bookimg} width={50} height={50} alt='img' /></td>
                      <td className='align-content-around text-end'>
                        <Link to={`/books/viewbook/${book._id}`} className="badge text-bg-warning ms-2 code-i"><MdOutlinePreview /></Link>
                        <Link to={`/books/editbook/${book._id}`} className="badge text-bg-warning ms-2 code-i"><FaUserEdit /></Link>
                        <span className="badge text-bg-danger ms-2 code-i" onClick={()=>deleterecord(book._id)}><MdDeleteForever /></span>
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

export default Books