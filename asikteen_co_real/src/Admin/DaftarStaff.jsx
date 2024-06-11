import React, { useState } from 'react';
import './Admin.css';
import NavbarAdmin from "./NavbarAdmin";


const Staff = () => {
  const [Staff, setStaff] = useState([
    { id: 1, name: 'Putra Ari Sandi', no: '0812341234', alamat: 'Jl. Merpati, Indonesia', email: 'sandi@gmail.com' },
    { id: 2, name: 'Ghina Nazhira', no: '085922458978', alamat: 'Jl. Asia Afrika, Indonesia', email: 'ghina@gmail.com' },
    { id: 3, name: 'Rolan Firmansyah', no: '08951234567', alamat: 'Jl. Soekarno Hatta, Indonesia', email: 'rolan@gmail.com' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
    <NavbarAdmin/>
    <h2 className='h2Staff'>Daftar Staff</h2>
    <div className="entries-selector-staff">
      <label htmlFor="entries-select">Show</label>
      <thead className="entries">
        <tr>
          <th className="Entries">10</th>
        </tr>
      </thead>
      <span>entries</span>
    </div>
    <div className="container">
      
      <div className="staff-table">
      <table >
     
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Staff</th>
            <th>No.Telepon</th>
            <th>Alamat</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Staff.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td>
              <td>{staff.name}</td>
              <td>{staff.no}</td>
              <td>{staff.alamat}</td>
              <td>{staff.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className='Showing'>Showing 1 to  6 of 10 entries </h3>
      
      <button onClick={handlePrevious} className="pagination-buttonK">
        Previous
      </button>
      <span className="pagination-current">{currentPage}</span>
      <button onClick={handleNext} className="pagination-buttony">
        Next
      </button>
      </div>
    </div>
    </>
  );
};

export default Staff;
