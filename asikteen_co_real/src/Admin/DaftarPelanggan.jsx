import React, { useState } from 'react';
import './Admin.css';
import NavbarAdmin from "./NavbarAdmin";


const Pelanggan = () => {
  const [Customer, setCustomer] = useState([
    { id: 1, name: 'Sandi Haye Ragnar', no: '0812341234', alamat: 'Jl. Merpati, Indonesia', email: 'sandi@gmail.com' },
    { id: 2, name: 'Daniel Herlambang', no: '085925570403', alamat: 'Jl. Asia Afrika, Indonesia', email: 'daniel@gmail.com' },
    { id: 3, name: 'Abid Fadillah Rifky', no: '08951234567', alamat: 'Jl. Soekarno Hatta, Indonesia', email: 'stepanie@gmail.com' },
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
    <h2 className='h2Pelanggan'>Daftar Pelanggan</h2>
    <div className="entries-selector-cus">
      <label htmlFor="entries-select">Show</label>
      <thead className="entries">
        <tr>
          <th className="Entries">10</th>
        </tr>
      </thead>
      <span>entries</span>
    </div>
    <div className="container">
      
      <div className="customer-table">
      <table >
     
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Pelanggan</th>
            <th>No.Telepon</th>
            <th>Alamat</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Customer.map((cus, index) => (
            <tr key={cus.id}>
              <td>{index + 1}</td>
              <td>{cus.name}</td>
              <td>{cus.no}</td>
              <td>{cus.alamat}</td>
              <td>{cus.email}</td>
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

export default Pelanggan;
