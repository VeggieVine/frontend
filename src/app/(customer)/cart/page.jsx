"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState, useEffect } from "react"
import Footer from "../../__components__/Footer"
import Navbar from "../../__components__/Navbar"
import { useAuth } from "@/src/hooks/useAuth"
import axios from "@/src/lib/axios"

export default function CartPage() {
    const { user } = useAuth({ middleware: "auth" })
    const [items, setItems] = useState([])
    const router = useRouter()

    useEffect(() => {
        try {
            const fetchCarts = async () => {
                const response = await axios.get("/api/carts")
                const data = await response.data.carts
                setItems(data)
            }

            if (user?.role === "customer") {
                fetchCarts()
            }
        }
        catch (error) {
            console.log(error)
        }
    }, [user])

    const updateCartItems = async (newItems) => {
        try {
            await axios.post("/api/carts", { carts: newItems })
            setItems(newItems)
        } catch (error) {
            console.log(error)
        }
    }

    const handleIncreaseQuantity = (itemId) => {
        const newItems = items.map((item) =>
            item.id === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
        updateCartItems(newItems)
    }

    const handleDecreaseQuantity = (itemId) => {
        const newItems = items.reduce((acc, item) => {
            if (item.id === itemId) {
                const newQuantity = item.quantity - 1
                if (newQuantity > 0) {
                    acc.push({ ...item, quantity: newQuantity })
                }
            } else {
                acc.push(item)
            }
            return acc
        }, [])
        updateCartItems(newItems)
    }

    const handleCheckout = () => {
        localStorage.setItem("cartItems", JSON.stringify(items))
        router.push('/checkout')
    }

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
        script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_CLIENT_KEY)
        document.body.appendChild(script)
    }, [])      

    return (
        <div className="flex flex-col min-h-screen justify-between gap-y-24">
            <Navbar />
            <div className="flex justify-center my-10">
                <div className="w-full max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">
                        Keranjang Belanja
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <div className="border p-4 bg-white shadow-md rounded-md">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Daftar Produk
                                </h2>
                                {items.length === 0 ? (
                                    <div className="text-center text-lg text-gray-600">
                                        Keranjang Anda kosong.
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="border-b py-4 flex items-center justify-between"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-20 h-20 relative">
                                                    <Image
                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/storage/product-images/${item.product.image}`}
                                                        alt={item.name}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        className="rounded-md"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-lg font-semibold">
                                                        {item.product.name}
                                                    </h2>
                                                    <p className="text-md text-gray-500">
                                                        Rp {item.product.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() =>
                                                        handleDecreaseQuantity(
                                                            item.id,
                                                        )
                                                    }
                                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                                >
                                                    -
                                                </button>
                                                <span className="px-3">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        handleIncreaseQuantity(
                                                            item.id,
                                                        )
                                                    }
                                                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="border p-4 bg-white shadow-md rounded-md">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Ringkasan Belanja
                                </h2>
                                <div className="flex justify-between mb-4">
                                    <span className="text-lg">Total:</span>
                                    <span className="text-lg font-semibold">
                                        Rp {items?.reduce((acc, cart) => acc + (cart.quantity * cart.product.price), 0) || 0}
                                    </span>
                                </div>
                                {items.length > 0 ? (
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300"
                                    >
                                        Checkout
                                    </button>
                                ) : (
                                    <button
                                        disabled
                                        className="w-full bg-gray-400 text-white py-2 rounded-md cursor-not-allowed"
                                    >
                                        Checkout
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
