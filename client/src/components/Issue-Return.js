import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function IssueReturn() {
  const [books, setBooks] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  // Fetch books with assignedTo populated
  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:8700/allbooklist');
      setBooks(res.data.allbook);
    } catch (err) {
      console.log("Book fetch error", err);
    }
  };

  const fetchStaffs = async () => {
    try {
      const res = await axios.get('http://localhost:8700/allstafflist');
      setStaffs(res.data.allstaff);
    } catch (err) {
      console.log("Staff fetch error", err);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchStaffs();
  }, []);

  const assignBook = async () => {
    if (!selectedBook || !selectedStaff) {
      setMessage("Please select both book and staff");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:8700/assignbook/${selectedBook}/${selectedStaff}`);
      setMessage(res.data.message);
      setSelectedBook("");
      setSelectedStaff("");
      fetchBooks(); // refresh book list
      navigate("/return")
    } catch (error) {
      console.error("Assign error", error);
      setMessage("Failed to assign book");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h2>📚 Assign Book to Staff</h2>

        {/* Book Dropdown */}
        <div style={{ marginBottom: "10px" }}>
          <strong>Select Book:</strong>
          <select onChange={(e) => setSelectedBook(e.target.value)} value={selectedBook}>
            <option value="">-- Select Book --</option>
            {books.filter(book => !book.assignedTo).map((book) => (
              <option key={book._id} value={book._id}>
                {book.booktitle} ({book.accessionno})
              </option>
            ))}
          </select>
        </div>

        {/* Staff Dropdown */}
        <div style={{ marginBottom: "10px" }}>
          <strong>Select Staff:</strong>
          <select onChange={(e) => setSelectedStaff(e.target.value)} value={selectedStaff}>
            <option value="">-- Select Staff --</option>
            {staffs.map((staff) => (
              <option key={staff._id} value={staff._id}>
                {staff.empname} ({staff.empcode})
              </option>
            ))}
          </select>
        </div>

        <button onClick={assignBook} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Assign Book
        </button>

        {/* Message */}
        {message && (
          <p style={{ marginTop: "20px", color: "green" }}>{message}</p>
        )}
      </div>
    </>
  );
}

export default IssueReturn;
