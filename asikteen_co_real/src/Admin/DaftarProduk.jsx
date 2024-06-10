import React, { useState } from 'react';
import './Admin.css';
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";
import { products } from '../data/ProductWomenC';


const Kategori = () => {
    const [cart, setCart] = useState([
        { id: 1, quantity: 1 },
        { id: 2, quantity: 1 }, 
        { id: 3, quantity: 1 }
    ]);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevious = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    };
  
    const handleNext = () => {
      setCurrentPage((prev) => prev + 1);
    };

    const getProductDetails = (id) => {
        return products.find(product => product.id === id);
    };

    const totalPrice = cart.reduce((total, cartItem) => {
        const product = getProductDetails(cartItem.id);
        return total + (product ? product.price * cartItem.quantity : 0);
    }, 0);

    const shippingCost = 10000;
    const totalPriceWithShipping = totalPrice + shippingCost;

    const handleCheckout = () => {
        navigate('/YourOrder', { state: { cart } });
    };

    // Debugging logs
    console.log('CartPage rendered');
    console.log('Cart state:', cart);

    return (
        <>
            <NavbarAdmin />
            
            <div className="cart">
                <h2 className="judul">Daftar Produk: {cart.length}</h2>
                <div className="entries-selectoru">
      <label htmlFor="entries-selectu">Show</label>
      <thead className="entriesu">
        <tr>
          <th className="Entriesu">10</th>
        </tr>
      </thead>
      <span>entries</span>
    </div>
    <button onClick={handlePrevious} className="add-product-button">
        Tambah Produk
      </button>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th className="cart-judul">No</th>
                            <th className="cart-judul">Item</th>
                            <th className="cart-judul">Product Name</th>
                            <th className="cart-judul">Kategori</th>
                            <th className="cart-judul">Price</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((cartItem, index) => {
                            const product = getProductDetails(cartItem.id);
                            if (!product) {
                                return null;
                            }
                            return (
                                <tr key={cartItem.id}>
                                    <td className="sel">{index + 1}</td>
                                    <td className="sel"><img className="gambar" src={product.image} alt={product.name} /></td>
                                    <td className="sel">{product.title}</td>
                                    <td className="sel">{product.category}</td>
                                    <td className="sel">Rp. {product.price.toLocaleString('id-ID')}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <h3 className='Showing'>Showing 1 to  6 of 10 entries </h3>
                <button onClick={handlePrevious} className="pagination-buttonP">
        Previous
      </button>
      <span className="pagination-current">{currentPage}</span>
      <button onClick={handleNext} className="pagination-buttonO">
        Next
      </button>
            </div>
        </>
    );
};

export default Kategori;
