"use client"

import { useState, useEffect } from "react"
import Footer from "@/src/app/__components__/Footer"
import Navbar from "@/src/app/__components__/Navbar"

export default function CheckoutPage() {

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
        const cartItems = JSON.parse(localStorage.getItem("cartItems"))
        if (cartItems) {
            setItems(cartItems)
        }
    }, [])

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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>
                <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="w-full md:w-2/3 bg-white p-4 rounded-md shadow-md mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={!formComplete}
                                className={`w-full py-2 rounded-md text-white ${formComplete ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/3 bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {items.length === 0 ? (
                            <div className="text-center text-lg text-gray-600">
                                Keranjang Anda kosong.
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex justify-between mb-4">
                                    <div>
                                        <h2 className="text-lg font-semibold">
                                            {item.product.name}
                                        </h2>
                                        <p className="text-md text-gray-500">
                                            Rp {item.product.price} x {item.quantity}
                                        </p>
                                    </div>
                                    <span className="text-lg font-semibold">
                                        Rp {item.product.price * item.quantity}
                                    </span>
                                </div>
                            ))
                        )}
                        <div className="border-t pt-4 mt-4 flex justify-between">
                            <span className="text-lg font-semibold">Total:</span>
                            <span className="text-lg font-semibold">Rp {total}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
