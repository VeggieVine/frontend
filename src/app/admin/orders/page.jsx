import { auth } from "@/src/lib/auth"
import Sidebar from "../../__components__/Sidebar"
import Table from "./__components__/Table"

export default async function AdminOrdersPage() {
    const { user } = (await auth()) || {}

    const data = [
        {
            orderId: "ORD001",
            username: "John Doe",
            date: "2023-06-01",
            item: "Mangga, Pokcoy, Semangka",
            totalPrice: 150000,
        },
        {
            orderId: "ORD002",
            username: "Jane Smith",
            date: "2023-06-02",
            item: "Mangga, Apel, Jeruk",
            totalPrice: 200000,
        },
        {
            orderId: "ORD003",
            username: "Michael Johnson",
            date: "2023-06-03",
            item: "Semangka, Pisang, Pepaya",
            totalPrice: 250000,
        },
    ]

    return (
        <>
            <Sidebar user={user} />
            <div className="ml-44 pt-20 pb-12 px-8 lg:ml-64">
                <h1 className="text-xl font-bold text-black pb-4">
                    Data Pesanan Masuk
                </h1>
                <div className="max-h-[100vh] overflow-hidden">
                    <Table data={data} />
                </div>
            </div>
            {/* Untuk detail order belum dibuatkan, detail order isinya kurang lebih sama, hanya ditambahkan detail peritemnya */}
        </>
    )
}
