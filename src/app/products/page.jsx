"use client";

import { useState } from "react";

import Footer from "@/src/app/__components__/Footer";
import Navbar from "@/src/app/__components__/Navbar";
import ProductCard from "./__components__/Card";

function ProductPage() {
    const [category, setCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const buahProducts = [
        {
            name: "Apel Fuji China",
            imageSrc: "/assets/image/apel.png",
            price: "40.000",
        },
        {
            name: "Apel Premium Pohon",
            imageSrc: "/assets/image/apel pohon.jpg",
            price: "62.000",
        },
        {
            name: "Blueberry China",
            imageSrc: "/assets/image/blueberry.jpg",
            price: "53.000",
        },
        {
            name: "Jeruk sunkist Valencia",
            imageSrc: "/assets/image/jeruk sunkist.jpg",
            price: "32.000",
        },
        {
            name: "Jeruk Lemon",
            imageSrc: "/assets/image/jeruk lemon.jpg",
            price: "28.000",
        },
        {
            name: "Jeruk Malang",
            imageSrc: "/assets/image/jeruk malang.jpg",
            price: "30.000",
        },
        {
            name: "Pear Century China",
            imageSrc: "/assets/image/pear.jpg",
            price: "25.000",
        },
        {
            name: "Kelengkeng Thailand",
            imageSrc: "/assets/image/kelengkeng.jpg",
            price: "34.000",
        },
        { name: "Kiwi", imageSrc: "/assets/image/kiwi.jpg", price: "69.000" },
        {
            name: "Belimbing",
            imageSrc: "/assets/image/belimbing.jpg",
            price: "29.000",
        },
        {
            name: "Semangka",
            imageSrc: "/assets/image/semangka.jpg",
            price: "90.000",
        },
        {
            name: "Pepaya",
            imageSrc: "/assets/image/pepaya.jpg",
            price: "30.000",
        },
    ];

    const sayurProducts = [
        {
            name: "Bawang Bombai",
            imageSrc: "/assets/image/bawang bombai.jpg",
            price: "35.000",
        },
        {
            name: "Bawang Putih",
            imageSrc: "/assets/image/bawang putih.jpg",
            price: "37.000",
        },
        {
            name: "Bawang Merah",
            imageSrc: "/assets/image/bawang merah.jpg",
            price: "25.000",
        },
        { name: "Jamur", imageSrc: "/assets/image/jamur.jpg", price: "42.000" },
        {
            name: "Brokoli",
            imageSrc: "/assets/image/brokoli.jpg",
            price: "39.000",
        },
        {
            name: "Wortel",
            imageSrc: "/assets/image/wortel.jpg",
            price: "17.000",
        },
        { name: "Tomat", imageSrc: "/assets/image/tomat.jpg", price: "25.000" },
        {
            name: "Mentimun",
            imageSrc: "/assets/image/timun.png",
            price: "15.000",
        },
        {
            name: "Kentang",
            imageSrc: "/assets/image/kentang.jpeg",
            price: "20.000",
        },
        {
            name: "Oyong",
            imageSrc: "/assets/image/oyong.jpeg",
            price: "21.000",
        },
        { name: "Kol", imageSrc: "/assets/image/kol.jpeg", price: "8.000" },
        {
            name: "Kol Unggu",
            imageSrc: "/assets/image/kol unggu.jpeg",
            price: "49.000",
        },
    ];

    const allProducts = [...buahProducts, ...sayurProducts];

    const filteredProducts = (products) => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    };

    const renderProducts = (products) => {
        return filteredProducts(products).map((product) => (
            <ProductCard
                key={product.name}
                name={product.name}
                imageSrc={product.imageSrc}
                price={product.price}
                renderButtons={() => (
                    <div className="flex justify-center mt-4 space-x-4">
                        <button
                            onClick={() => handleDetailClick(product)}
                            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Detail
                        </button>
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Add Keranjang
                        </button>
                    </div>
                )}
            />
        ));
    };

    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex justify-center">
                <div className="w-full max-w-6xl">
                    <div className="flex justify-center my-20">
                        <button
                            onClick={() => setCategory("buah")}
                            className="px-4 py-2 mx-2 bg-green-500 text-white rounded"
                        >
                            Buah
                        </button>
                        <button
                            onClick={() => setCategory("sayur")}
                            className="px-4 py-2 mx-2 bg-green-500 text-white rounded"
                        >
                            Sayur
                        </button>
                        <button
                            onClick={() => setCategory("all")}
                            className="px-4 py-2 mx-2 bg-green-500 text-white rounded"
                        >
                            Semua
                        </button>
                    </div>
                    <div className="flex justify-center mb-4">
                        <input
                            type="text"
                            placeholder="Cari produk..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="px-4 py-2 border rounded w-1/2"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-12 mb-8">
                        {category === "buah" && renderProducts(buahProducts)}
                        {category === "sayur" && renderProducts(sayurProducts)}
                        {category === "all" && renderProducts(allProducts)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductPage;
