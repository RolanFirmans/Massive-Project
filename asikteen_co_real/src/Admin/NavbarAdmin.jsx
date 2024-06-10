import React, { useState } from 'react';
import './Admin.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <h2 className='AdminPageh2'>Admin Page</h2>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="AdminDashboardPage">Home</a>
        <a href="#">Kembali Ke Toko</a>
        <a href="KelolaPesanan">Kelola Pesanan</a>
        <div className="dropdown">
          <a href="#">Kelola Toko</a>
          <div className="dropdown-content">
            <a href="#">Kategori</a>
            <a href="DaftarProduk">Produk</a>
            <a href="KelolaPembayaran">Metode Pembayaran</a>
          </div>
        </div>
        <a href="DaftarPelanggan">Kelola Pelanggan</a>
        <a href="DaftarStaff">Kelola Staff</a>
        <a href="#">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
