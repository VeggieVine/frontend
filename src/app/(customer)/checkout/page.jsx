"use client"

import { useState, useEffect } from "react"
import Footer from "@/src/app/__components__/Footer"
import Navbar from "@/src/app/__components__/Navbar"
import { useAuth } from "@/src/hooks/useAuth"
import axios from "@/src/lib/axios"

export default function CheckoutPage() {
    const { user } = useAuth({ middleware: "auth" })

    const [items, setItems] = useState([])
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
    })
    const [formComplete, setFormComplete] = useState(false)

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

    useEffect(() => {
        const isFormComplete = Object.values(formData).every(value => value !== "")
        setFormComplete(isFormComplete)
    }, [formData])

    const total = items.reduce((sum, item) => {
        const price = typeof item.product.price === "string" ? parseInt(item.product.price.replace(/\./g, ""), 10) : item.product.price
        return sum + price * item.quantity
    }, 0)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/tokenizer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    total,
                    shippingAddress: formData,
                }),
            })

            const data = await response.json()

            if (data.token) {
                window.snap.pay(data.token, {
                    onSuccess: function(result) {
                        console.log('Success:', result)
                    },
                    onPending: function(result) {
                        console.log('Pending:', result)
                    },
                    onError: function(result) {
                        console.log('Error:', result)
                    },
                    onClose: function() {
                        console.log('Customer closed the popup without finishing the payment')
                    },
                })
            } else {
                console.error('Failed to get transaction token:', data)
            }
        } catch (error) {
            console.error('Failed to fetch:', error)
        }
    }

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'
        script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_CLIENT_KEY)
        document.body.appendChild(script)
    }, [])

    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="flex justify-center my-20">
                <div className="w-full max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <div className="bg-white border rounded shadow-lg p-8">
                                <h2 className="text-2xl font-semibold mb-4">Alamat Penagihan</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block mb-1 text-sm text-gray-700">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                            required
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm text-gray-700">No Telepon</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm text-gray-700">Alamat Lengkap</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm text-gray-700">Kota</label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                            required
                                        >
                                            <option value="">Pilih Kota</option>
                                            <option value="Jakarta">Jakarta</option>
                                            <option value="Bogor">Bogor</option>
                                            <option value="Depok">Depok</option>
                                            <option value="Tangerang">Tangerang</option>
                                            <option value="Bekasi">Bekasi</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={!formComplete}
                                        className={`w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${!formComplete && "opacity-50 cursor-not-allowed"}`}
                                    >
                                        Proses Pesanan Saya
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-white border rounded shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-4">Ringkasan Pesanan</h2>
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-bold">Subtotal:</span>
                                    <span className="text-lg font-bold">Rp {total}</span>
                                </div>
                                <p className="text-sm text-gray-600">Jumlah Produk : {items.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
