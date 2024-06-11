import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavbarComponent from "../component/NavbarComponent";
import { products } from '../data/ProductWomenC';
import wa from "../assets/img/wa.png"

const YourOrderPage = () => {
    const [cart, setCart] = useState([
        { id: 1, quantity: 1 } // Initial cart with only IDs and quantities
    ]);

    const updateItem = (id) => {
        setCart(order.filter((item) => item.id !== id));
      };
    
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
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

    return (
        <>
            <NavbarComponent />
            <div className="cart">
                <h2 className="judul">YOU HAVE  {cart.length} TRANSACTIONS</h2>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th className="cart-judul">No</th>
                            <th className="cart-judul">Order Date</th>
                            <th className="cart-judul">Total</th>
                            <th className="cart-judul">Payment Method</th>
                            <th className="cart-judul">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((cartItem, index) => {
                            const product = getProductDetails(cartItem.id);
                            return (
                                <tr key={cartItem.id}>
                                    <td className="sel">{index + 1}</td>
                                    <td className="sel">01-06-2024</td>
                                    <td className="sel">Rp. 80.000</td>
                                    <td className="sel">BCA 321294566567 (Putra Ari Sandi)</td>
                                    <td className="sel"><p className='statusP'>Pending</p></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="div-konten-konfirmasi">
                  <p>Please Confirm Your Payment by Contact Us On WhatsApp</p>
                  <a href="https://wa.me/6281311189434" className="tombolW" target="_blank" rel="noopener noreferrer">
                        Confirm Payment to WhatsApp <span><img src={wa} alt="WhatsApp" /></span>
                  </a>
                </div>
            </div>
        </>
    );
};

export default YourOrderPage;
