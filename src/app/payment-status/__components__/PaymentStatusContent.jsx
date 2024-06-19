"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function PaymentStatusContent() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const order_id = searchParams.get("order_id")
    const status_code = searchParams.get("status_code")
    const transaction_status = searchParams.get("transaction_status")
    const [statusMessage, setStatusMessage] = useState("")

    useEffect(() => {
        if (transaction_status) {
            switch (transaction_status) {
            case "settlement":
                setStatusMessage(
                    "Pembayaran Anda berhasil! Terima kasih telah berbelanja dengan kami.",
                )
                break
            case "pending":
                setStatusMessage(
                    "Pembayaran Anda masih tertunda. Silakan selesaikan pembayaran Anda.",
                )
                break
            case "deny":
            case "expire":
            case "cancel":
                setStatusMessage(
                    "Pembayaran Anda gagal. Silakan coba lagi atau gunakan metode pembayaran lain.",
                )
                break
            default:
                setStatusMessage(
                    "Status pembayaran tidak diketahui. Silakan hubungi dukungan pelanggan kami.",
                )
            }
        }
    }, [transaction_status])

    return (
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Status Pembayaran</h1>
            <p className="text-gray-700 mb-6">{statusMessage}</p>
            <div className="text-left">
                <p>
                    <strong>Order ID:</strong> {order_id}
                </p>
                <p>
                    <strong>Status Code:</strong> {status_code}
                </p>
                <p>
                    <strong>Transaction Status:</strong> {transaction_status}
                </p>
            </div>
            <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => router.push("/")}
            >
                Kembali ke Beranda
            </button>
        </div>
    )
}
