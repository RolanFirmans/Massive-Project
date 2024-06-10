import React, { useState } from 'react';
import './Admin.css';
import NavbarAdmin from "./NavbarAdmin";


const Kategori = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Shoes', products: 1, date: '17-05-2024' },
    { id: 2, name: 'Clothes', products: 1, date: '17-05-2024' },
    { id: 3, name: 'Pants', products: 1, date: '17-05-2024' },
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
    <h2 className='h2Kategori'>Daftar Kategori</h2>
    <div className="entries-selector">
      <label htmlFor="entries-select">Show</label>
      <thead className="entries">
        <tr>
          <th className="Entries">10</th>
        </tr>
      </thead>
      <span>entries</span>
    </div>
    <div className="container">
      
    <button onClick={handlePrevious} className="add-category-button">
        Tambah Kategori
      </button>
      <div className="category-table">
      <table >
     
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kategori</th>
            <th>Jumlah Product</th>
            <th>Tanggal Dibuat</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>{category.products}</td>
              <td>{category.date}</td>
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

export default Kategori;
