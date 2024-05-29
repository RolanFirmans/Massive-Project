import React from "react";
import NavbarComponent from "../component/NavbarComponent";
import { products } from "../data/ProductWomenC"; 
import "../Css/Css.css"; 

const DetailPage = () => {
    // Ambil data produk yang diinginkan dari productWomen
    const product = products[0]; // Misal, kita hanya mengambil produk pertama untuk contoh ini

    return (
        <>
            <NavbarComponent />
            <div className="bg-zinc-100 min-h-screen">
                <div className="wadah">
                    <div className="kartu-produk">
                        <div className="md:w-1/2 flex justify-center">
                            <img src={product.image} alt={product.title} className="gambar-produk" />
                            <h2 className="product-title">{product.title}</h2>
                        </div>
                        <div className="info-produk">
                            <div className="info-pilihan">
                            <h2 className="judul-info">Product Information</h2>
                            <h2 className="judul-info">Product Details</h2>
                            </div>
                            <hr className="garis" />
                            <div className="detail-produk">
                                <h4 className="font-bold">Size <span>{product.size}</span></h4>
                            </div>
                            <div className="detail-produk">
                                <h4 className="font-bold">Materials & care</h4>
                                <div className="mt-2">
                                    <div className="materials">
                                        <span>Materials: {product.materials} </span>
                                    </div>
                                    <hr className="garis" />
                                    <div className="care-instructions">
                                        <span>Care Instructions: {product.careinstructions}</span>
                                    </div>
                                    <hr className="garis" />
                                </div>
                            </div>
                            <div className="harga-produk">
                                <span>Price</span>
                                <span> Rp.{product.price}</span>
                            </div>
                            <button className="tombol-tambah">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage;