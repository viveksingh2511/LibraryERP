import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Addbook() {

const [user,setuser]=useState({
  booktitle:"",
  library:"",
  booktype:"",
  author:"",
  accessionno:"",
  bookimg:""
});

    const updatefield = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;
        setuser((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }

      const addbook = async(req,res)=>{
    if(user.booktitle==="")
    {
      toast.error("booktitle is blank",{position: "top-left",autoClose: 1000});
    }
    else
    {
  const {booktitle,library,booktype,author,accessionno,bookimg}=user;
const postdata = await fetch("http://localhost:8700/addbookpage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                 booktitle,library,booktype,author,accessionno,bookimg
            })
        })
        const data = await postdata.json();
        console.log(data.status);
        if(data.status===255)
        {
          toast.success("successfully registor user",{position: "top-left",autoClose: 2000});
        //   setTimeout(()=>{
        //     navigation("/userlogin");
        //   },2000)
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
                                    <h3 className='text-dark fw-bold'>Add Books</h3>
                                    <ToastContainer />
                                    <hr />
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Book Title</label>
                                        <input value={user.booktitle} type="text" className="form-control bg-body-secondary text-dark p-2" name='booktitle' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Library</label>
                                        <input value={user.library} type="text" className="form-control bg-body-secondary text-dark p-2" name='library' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Book Type</label>
                                        <input value={user.booktype} type="text" className="form-control bg-body-secondary text-dark p-2" name='booktype' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Author</label>
                                        <input value={user.author} type="text" className="form-control bg-body-secondary text-dark p-2" name='author' onInput={updatefield} />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Accession No</label>
                                        <input value={user.accessionno} type="text" className="form-control bg-body-secondary text-dark p-2" name='accessionno' onInput={updatefield} />
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Book Img</label>
                                        <input value={user.bookimg} type="text" className="form-control bg-body-secondary text-dark p-2" placeholder='url only' name='bookimg' onInput={updatefield} />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <input type='button' value="Add Book" className='btn btn-success' onClick={addbook}/>
                                        <input type='reset' value="Cancel" className='btn btn-danger ms-3' />
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

export default Addbook