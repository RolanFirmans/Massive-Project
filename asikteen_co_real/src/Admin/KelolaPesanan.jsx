import React, { useState } from 'react';
import NavbarAdmin from "./NavbarAdmin";

const orders = [
    { no: 1, name: "Sandi Haye Ragnar", date: "17-12-2023", total: "Rp.80.000", status: "Success" },
    { no: 2, name: "Daniel Herlambang", date: "12-01-2024", total: "Rp.90.000", status: "Pending" },
    { no: 3, name: "Abid Fadillah Rifky", date: "12-01-2024", total: "Rp.99.000", status: "Shipping" }
  ];
  const statusClasses = {
    Success: "status-success",
    Pending: "status-pending",
    Shipping: "status-shipping"
  };  
const KelolaPesanan = () => {
  
  const [entriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const displayedOrders = orders.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

    return(
    <>
    <NavbarAdmin />
    <h1>Daftar Pesanan</h1>
    <div className="entries-selector">
      <label htmlFor="entries-select">Show</label>
      <thead className="entries">
        <tr>
          <th className="Entries">10</th>
        </tr>
      </thead>
      <span>entries</span>
    </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className='cart-judul'>No</th>
              <th className='cart-judul' >Nama Pelanggan</th>
              <th className='cart-judul'>Tanggal Order</th>
              <th className='cart-judul'>Total</th>
              <th className='cart-judul'>Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map(order => (
              <tr key={order.no}>
                <td className="sel">{order.no}</td>
                <td className="sel">{order.name}</td>
                <td className="sel">{order.date}</td>
                <td className="sel">{order.total}</td>
                <td className="sel">
                  <span className={`status ${statusClasses[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3 className='Showing'>Showing 1 to  6 of 10 entries </h3>
      
      <button onClick={handlePrevious} className="pagination-button">
        Previous
      </button>
      <span className="pagination-current">{currentPage}</span>
      <button onClick={handleNext} className="pagination-buttonw">
        Next
      </button>
    </div>
      
      
 
    </>
    )
}
export default KelolaPesanan