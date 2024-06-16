"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "../../../__components__/Footer";
import Navbar from "../../../__components__/Navbar";
import productDetails from "../productDetails";
import { usePathname } from "next/navigation";
// import { auth } from "@/auth"

function ProductDetailPage() {
    const pathname = usePathname();

    // const [user, setUser] = useState(null)
    const [quantity, setQuantity] = useState(1);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const { user } = (await auth()) || {}
    //         setUser(user)
    //     }
    //     fetchUser()
    // }, [])

    const decodedId = decodeURIComponent(pathname);
    console.log(decodedId);
    let data = decodedId.split("/");
    console.log(data[data.length - 1]);
    let getlastpath = data[data.length - 1];
    const product = productDetails[getlastpath];

    if (!product) {
        return <div>Produk tidak ditemukan</div>;
    }

    const handleAddToCart = () => {
        console.log(`Menambahkan ${quantity} ${product.name} ke keranjang!`);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex justify-center my-20">
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 rounded-lg overflow-hidden relative">
                            <div className="absolute top-0 right-0 z-10 p-4">
                                <Image
                                    src="/assets/image/logo.svg"
                                    width="150"
                                    height="150"
                                    alt="Logo"
                                    priority
                                />
                            </div>
                            <div className="mt-20">
                                <Image
                                    src={product.imageSrc}
                                    width={500}
                                    height={500}
                                    alt={product.name}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semi bold mb-4">
                                {product.name}
                            </h1>
                            <p className="text-3xl font-bold mb-4">
                                Rp {product.price}
                            </p>
                            <p className="text-md mb-4">
                                1 Pack = 950 - 1.050 gram
                            </p>
                            <h2 className="text-2xl font-bold mb-2">
                                Informasi Produk
                            </h2>
                            <p className="text-md mb-2">
                                Kategori: {product.category}
                            </p>
                            <p className="text-md">{product.description}</p>
                            <hr className="my-4 border-1 border-gray-600" />
                            <div className="flex items-center mt-4">
                                <p className="mr-4">Kuantitas:</p>
                                <button
                                    onClick={handleDecrement}
                                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    -
                                </button>
                                <span className="px-2">{quantity}</span>
                                <button
                                    onClick={handleIncrement}
                                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    +
                                </button>
                                <p className="ml-4">Stock: {product.stock}</p>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="px-20 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-4"
                            >
                                + keranjang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;
