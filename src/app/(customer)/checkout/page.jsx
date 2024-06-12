"use client"

import { useState, useEffect } from "react"
import Footer from "../../__components__/Footer"
import Navbar from "../../__components__/Navbar"
import { auth } from "../../../../auth"

export default function CheckoutPage() {
    const [user, setUser] = useState(null)
    const [items, setItems] = useState([])
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
    })
    const [formComplete, setFormComplete] = useState(false) // Variabel formComplete harus didefinisikan di sini

    useEffect(() => {
        async function fetchUser() {
            const { user } = (await auth()) || {}
            setUser(user)
        }

        fetchUser()
        const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")
        setItems(cartItems)
    }, [])

    useEffect(() => {
        const isFormComplete = Object.values(formData).every(
            (value) => value !== "",
        )
        setFormComplete(isFormComplete)
    }, [formData])

    const total = items.reduce((sum, product) => {
        const price =
            typeof product.price === "string"
                ? parseInt(product.price.replace(/\./g, ""), 10)
                : product.price
        return sum + price * product.quantity
    }, 0)

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email" && !value.endsWith("@gmail.com")) return
        if (name === "phone" && !/^\d*$/.test(value)) return
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="w-full h-full">
            <Navbar user={user} />
            <div className="flex justify-center my-20">
                <div className="w-full max-w-6xl">
                    <h1 className="text-3xl font-bold mb-8 text-center">
                        Checkout
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-2">
                            <div className="bg-white border rounded shadow-lg p-8">
                                <h2 className="text-2xl font-semibold mb-4">
                                    Alamat Penagihan
                                </h2>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label className="block mb-1 text-sm text-gray-700">
                                            Nama Lengkap
                                        </label>
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
                                        <label className="block mb-1 text-sm text-gray-700">
                                            Email
                                        </label>
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
                                        <label className="block mb-1 text-sm text-gray-700">
                                            No Telepon
                                        </label>
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
                                        <label className="block mb-1 text-sm text-gray-700">
                                            Alamat Lengkap
                                        </label>
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
                                        <label className="block mb-1 text-sm text-gray-700">
                                            Kota
                                        </label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                            required
                                        >
                                            <option value="">Pilih Kota</option>
                                            <option value="Jakarta">
                                                Jakarta
                                            </option>
                                            <option value="Bogor">Bogor</option>
                                            <option value="Depok">Depok</option>
                                            <option value="Tangerang">
                                                Tangerang
                                            </option>
                                            <option value="Bekasi">
                                                Bekasi
                                            </option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={!formComplete} // Disable button if the form is not complete
                                        className={`w-full px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${!formComplete && "opacity-50 cursor-not-allowed"}`}
                                    >
                                        Proses Pesanan Saya
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="bg-white border rounded shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-4">
                                    Ringkasan Pesanan
                                </h2>
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-bold">
                                        Subtotal:
                                    </span>
                                    <span className="text-lg font-bold">
                                        Rp {total}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Jumlah Produk : {items.length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
