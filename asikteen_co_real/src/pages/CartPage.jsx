import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavbarComponent from "../component/NavbarComponent";
import { products } from '../data/ProductWomenC';

const CartPage = () => {
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
                <h2 className="judul">ITEMS IN CART: {cart.length} ITEM(S)</h2>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th className="cart-judul">No</th>
                            <th className="cart-judul">Item</th>
                            <th className="cart-judul">Product Name</th>
                            <th className="cart-judul">Quantity</th>
                            <th className="cart-judul">Price</th>
                            <th className="cart-judul">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((cartItem, index) => {
                            const product = getProductDetails(cartItem.id);
                            return (
                                <tr key={cartItem.id}>
                                    <td className="sel">{index + 1}</td>
                                    <td className="sel"><img className="gambar" src={product.image} alt={product.name} /></td>
                                    <td className="sel">{product.title}</td>
                                    <td className="sel">{cartItem.quantity}</td>
                                    <td className="sel">Rp. {product.price.toLocaleString('id-ID')}</td>
                                    <td className="sel">
                                    <button
                      className="tombolU"
                      onClick={() => updateItem(orderItem.id)}
                    >
                      Update
                    </button>
                                        <button className="tombolr" onClick={() => removeItem(cartItem.id)}>Remove</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="div-konten">
                    <h3 className="judul-sub">TOTAL PRICE</h3>
                    <p>Jaket Vintage - Rp. {totalPrice.toLocaleString('id-ID')}</p>
                    <p>Total (inc. 10k Ongkir) - Rp. {totalPriceWithShipping.toLocaleString('id-ID')}</p>
                </div>
                <div className="div-konten">
                    <Link to="/DetailPage" className="tombolC">Continue Shopping</Link>
                    <Link to="/TransactionPage" className="Checkout">Checkout</Link>
                </div>
            </div>
        </>
    );
};

export default CartPage;
