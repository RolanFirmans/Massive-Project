import React from "react";
import NavbarAdmin from "./NavbarAdmin";


const AdminDashboard = () => {

    return (
    <>
    <NavbarAdmin />
    <div className="card-grid">
      <div className="card">
        <div className="card-iconO">👤</div>
        <div className="card-titleO">Pelanggan</div>
        <div className="card-contentO">3</div>
      </div>
      <div className="card">
        <div className="card-iconJ">📝</div>
        <div className="card-titleJ">Pesanan</div>
        <div className="card-contentJ">3</div>
      </div>
      <div className="card">
        <div className="card-iconK">💳</div>
        <div className="card-titleK">Konfirmasi Pembayaran</div>
        <div className="card-contentK">3</div>
      </div>
    </div>

    <div className="welcome-message">
      <h2>Selamat Datang</h2>
      <p>
        Pada halaman admin website preloved kami! Kami sangat senang memiliki Anda di sini.
        Halaman ini dirancang khusus untuk membantu Anda mengelola dan memantau semua aktivitas
        di platform preloved kami dengan mudah dan efisien.
      </p>
    </div>
    </>
    )
    
}

export default AdminDashboard