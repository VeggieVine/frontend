"use client"

import Navbar from "@/src/app/__components__/Navbar"
import Footer from "@/src/app/__components__/Footer"
import Image from "next/image"
import { useState } from "react"

export default function ProfilePage() {
    const [phone, setPhone] = useState("") 
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "", 
        profileImage: "/assets/image/profile.jpg",
    })

    const handlePhoneSubmit = (e) => {
        e.preventDefault()
        setUser({ ...user, phone: phone })
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-24">
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden">
                        <Image
                            src={user.profileImage}
                            alt={user.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
                    <p className="text-gray-500">{user.email}</p>
                    {user.phone ? (
                        <p className="text-gray-500">{user.phone}</p>
                    ) : (
                        <form onSubmit={handlePhoneSubmit} className="mt-4">
                            <input
                                type="text"
                                placeholder="Masukkan nomor telepon"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="border px-4 py-2 rounded"
                            />
                            <button
                                type="submit"
                                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
