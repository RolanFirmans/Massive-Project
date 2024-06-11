import React, { useState } from 'react';
import './Admin.css';
import NavbarAdmin from "./NavbarAdmin";


const Pembayaran = () => {
  const [Payment, setPayment] = useState([
    { id: 1, name: 'Bank BCA', norek: '5465433687', atasnama: 'Ghina Nazhira', logo: 'BCA.png' },
    { id: 2, name: 'Bank Mandiri', norek: '1140023238887', atasnama: 'Putra Ari Sandi', logo: 'Mandiri.png' },
    { id: 3, name: 'OVO', norek: '085925570403', atasnama: 'Muhammad Irsyad Hidayat', logo: 'OVO.png' },
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
    <h2 className='h2Pembayaran'>Daftar Metode Pembayaran</h2>
    <div className="entries-selector-pay">
      <label htmlFor="entries-select">Show</label>
      <thead className="entries">
        <tr>
          <th className="Entries">10</th>
        </tr>
      </thead>
      <span>entries</span>
    </div>
    <div className="container">
      
      <button onClick={handlePrevious} className="add-payment-button">
        Tambah Metode
      </button>
      <div className="payment-table">
      <table >
     
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Metode</th>
            <th>No.Rek</th>
            <th>Atas Nama</th>
            <th>Logo</th>
          </tr>
        </thead>
        <tbody>
          {Payment.map((pay, index) => (
            <tr key={pay.id}>
              <td>{index + 1}</td>
              <td>{pay.name}</td>
              <td>{pay.norek}</td>
              <td>{pay.atasnama}</td>
              <td>{pay.logo}</td>
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

export default Pembayaran;
