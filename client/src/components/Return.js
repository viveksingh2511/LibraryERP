import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

function Return() {

  const [report, setReport] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAssignedBooks();
  }, []);

  const fetchAssignedBooks = async () => {
    try {
      const res = await axios.get('http://localhost:8700/assignreport');
      setReport(res.data.allassigned);
    } catch (err) {
      console.log("Report fetch error", err);
    }
  };

  const returnBook = async (bookId) => {
    try {
      const res = await axios.post(`http://localhost:8700/returnbook/${bookId}`);
      setMessage(res.data.message);
      fetchAssignedBooks(); // refresh list
    } catch (err) {
      console.error("Return failed", err);
      setMessage("Failed to return book");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ padding: '20px' }}>
        <h2>📋 Assigned Book Report</h2>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Accession No</th>
              <th>Assigned To</th>
              <th>Emp Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {report.map((book) => (
              <tr key={book._id}>
                <td>{book.booktitle}</td>
                <td>{book.accessionno}</td>
                <td>{book.assignedTo?.empname}</td>
                <td>{book.assignedTo?.empcode}</td>
                <td>
                  <button onClick={() => returnBook(book._id)}>Return</button>
                </td>
              </tr>
            ))}
            {report.length === 0 && (
              <tr>
                <td colSpan="5">No assigned books found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Return