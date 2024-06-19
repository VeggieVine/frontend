import { Suspense } from "react"
import Navbar from "@/src/app/__components__/Navbar"
import Footer from "@/src/app/__components__/Footer"
import PaymentStatusContent from "./__components__/PaymentStatusContent"

export default function PaymentStatusPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
                <Suspense fallback={<div>Loading...</div>}>
                    <PaymentStatusContent />
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}
