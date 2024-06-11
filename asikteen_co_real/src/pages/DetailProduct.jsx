import React from "react";
import NavbarComponent from "../component/NavbarComponent";
import { useLocation, Link } from "react-router-dom";
import "../Css/Css.css"; 

const DetailProduct = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Ambil produk dari state

    if (!product) {
        return <div>Product not found</div>;
    }

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
                        <div className="info-produk2">
                            <div className="info-pilihan2">
                                <h2 className="judul-info3"><Link to={`/detail/${product.id}`} state={{ product }}>Product Information</Link></h2>
                                <h2 className="judul-info4">Product Details</h2>
                            </div>
                            <hr className="garis" />
                            <div className="detail-produk2">
                                <ul className="detail-p">
                                    <li className="detail-p">Jacket lengan panjang</li>
                                    <li className="detail-p">Ribbed high neck</li>
                                    <li className="detail-p">Dilengkapi kantong samping</li>
                                    <li className="detail-p">Material: Poly suede</li>
                                    <li className="detail-p">Warna: Black</li>
                                </ul>
                            </div>
                            <div className="harga-produk">
                                <span>Price</span>
                                <span> Rp.{product.price}</span>
                            </div>
                            <Link to="/CartPage"><button className="tombol-tambah">Add To Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;
