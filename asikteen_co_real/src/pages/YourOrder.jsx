import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../component/NavbarComponent";
import { products } from "../data/ProductWomenC";
import ovo from "../assets/img/ovo.png";
import bca from "../assets/img/bca.png";
import mandiri from "../assets/img/mandiri.png";

const YourOrderPage = () => {
  const [order, setCart] = useState([
    { id: 1, quantity: 1 }, // Initial cart with only IDs and quantities
  ]);

  const removeItem = (id) => {
    setCart(order.filter((item) => item.id !== id));
  }; 

  const updateItem = (id) => {
    setCart(order.filter((item) => item.id !== id));
  };


  const getProductDetails = (id) => {
    return products.find((product) => product.id === id);
  };

  const totalPrice = order.reduce((total, orderItem) => {
    const product = getProductDetails(orderItem.id);
    return total + (product ? product.price * orderItem.quantity : 0);
  }, 0);

  const shippingCost = 10000;
  const totalPriceWithShipping = totalPrice + shippingCost;

  return (
    <>
      <NavbarComponent />
      <div className="YourOrder">
        <h2 className="judul">THANK YOU FOR SHOPPING AT ASIKTEEN.CO</h2>
        <table className="tabel">
          <thead>
            <tr>
              <th className="order-judul">No</th>
              <th className="order-judul">Item</th>
              <th className="order-judul">Product Name</th>
              <th className="order-judul">Quantity</th>
              <th className="order-judul">Price</th>
              <th className="order-judul">Remove</th>
            </tr>
          </thead>
          <tbody>
            {order.map((orderItem, index) => {
              const product = getProductDetails(orderItem.id);
              return (
                <tr key={orderItem.id}>
                  <td className="sel">{index + 1}</td>
                  <td className="sel">
                    <img
                      className="gambar"
                      src={product.image}
                      alt={product.name}
                    />
                  </td>
                  <td className="sel">{product.title}</td>
                  <td className="sel">{orderItem.quantity}</td>
                  <td className="sel">
                    Rp. {product.price.toLocaleString("id-ID")}
                  </td>
                  <td className="sel">
                  <button
                      className="tombolU"
                      onClick={() => updateItem(orderItem.id)}
                    >
                      Update
                    </button>
                    <button
                      className="tombolr"
                      onClick={() => removeItem(orderItem.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="div-konten">
          <h3 className="judul-sub">TOTAL PRICE</h3>
          <p>
            Jaket Vintage -{" "}
            <span className="Uang">
              Rp. {totalPrice.toLocaleString("id-ID")}
            </span>
          </p>
          <p>
            Ongkir -{" "}
            <span className="priceO">
              Rp. {shippingCost.toLocaleString("id-ID")}
            </span>
          </p>
          <input
            type="text"
            readOnly
            value={`Rp. ${totalPriceWithShipping.toLocaleString("id-ID")}`}
            className="total-price-input"
          />
        </div>
      </div>
      <h2 className="judul-kedua">
        Total price listed above include shipping cost of IDR 10,000
      </h2>
      <h2 className="judul-kedua">
        If you have made payment, please confirm your payment.
      </h2>
      <div className="bank">
        <img src={ovo} />
        <img src={bca} />
        <img src={mandiri} />
      </div>
      <h2 className="judul-ketiga">
        We will process your order immediately 1x24 hours after you make payment
        to our ATM and include personal information about the person making the
        payment such as Name of Account Owner / Source of Funds, Payment Date,
        Payment Method and Payment Amount.
      </h2>
      <div className="konten-check">
      <button className="check" onClick={() => alert('IAggre')}>I Agree and Check Out</button>
      </div>
    </>
    
  );
};

export default YourOrderPage;
