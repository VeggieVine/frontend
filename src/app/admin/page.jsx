"use client"

import { redirect } from "next/navigation"
import Sidebar from "../__components__/Sidebar"
import Card from "./__components__/Card"
import { useAuth } from "@/src/hooks/useAuth"
import { useEffect } from "react"

export default function AdminPage() {
    const { user } = useAuth({ middleware: "guest" })

    const cardData = [
        {
            id: 1,
            title: "Pesanan Masuk",
            description: "ini pesanan masuk",
        },
        {
            id: 2,
            title: "Data Barang",
            description: "ini data barang",
        },
        {
            id: 3,
            title: "Invoice",
            description: "ini invoice",
        },
    ]

    useEffect(() => {
        if (user && user.role !== "admin") {
            redirect("/")
        }
    }, [user])

    return (
        <>
            <Sidebar user={user} />
            <div className="ml-44 pt-20 px-8 lg:ml-64">
                <h1 className="text-xl font-bold text-black pb-12">
                    Dashboard
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {cardData.map((data) => (
                        <Card
                            key={data.id}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
