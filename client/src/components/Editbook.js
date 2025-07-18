import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Editbook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setuser] = useState({
    booktitle: "",
    library: "",
    booktype: "",
    author: "",
    accessionno: "",
    bookimg: ""
  });

  // ✅ Load single book data
  const singlebookdata = async () => {
    try {
      const res = await axios.get(`http://localhost:8700/singlebookrecord/${id}`);
      setuser(res.data.mydata); // ✅ use correct key (mydata)
    } catch (error) {
      console.error("Error fetching book:", error);
      toast.error("Failed to load book");
    }
  };

  useEffect(() => {
    singlebookdata();
  }, [id]);

  const updatefield = (e) => {
    const { name, value } = e.target;
    setuser((preval) => ({
      ...preval,
      [name]: value
    }));
  };

  // ✅ Update book using PATCH
  const updatebook = async () => {
    if (user.booktitle === "") {
      toast.error("Book title is blank", { position: "top-left", autoClose: 1000 });
      return;
    }

    try {
      const res = await fetch(`http://localhost:8700/updatebook/${id}`, {
        method: "PATCH", // ✅ PATCH not POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      const data = await res.json();

      if (data.status === 251) {
        toast.success("Successfully updated book", { position: "top-left", autoClose: 2000 });
        setTimeout(() => {
          navigate("/books");
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
                  <h3 className='text-dark fw-bold'>Edit Books</h3>
                  <ToastContainer />
                  <hr />
                </div>

                {/* Form fields */}
                {[
                  { label: "Book Title", name: "booktitle" },
                  { label: "Library", name: "library" },
                  { label: "Book Type", name: "booktype" },
                  { label: "Author", name: "author" },
                  { label: "Accession No", name: "accessionno" },
                  { label: "Book Img", name: "bookimg", placeholder: "url only" }
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
                    <input type='button' value="Update Book" className='btn btn-success' onClick={updatebook} />
                    <input type='reset' value="Cancel" className='btn btn-danger ms-3' />
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

export default Editbook;
