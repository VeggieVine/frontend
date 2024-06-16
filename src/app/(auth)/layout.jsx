"use client"

import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { useAuth } from "@/src/hooks/useAuth"

export default function AuthLayout({ children }) {
    const { user } = useAuth({ middleware: "guest" })

    if (user && user?.role === "admin") {
        redirect("/admin")
    }
    else if (user && user?.role === "customer") {
        redirect("/")
    }

    return (
        <div className="flex items-center max-w-screen-xl min-h-screen mx-auto ">
            <div className="mx-auto max-w-screen-xl w-full px-4 py-16 sm:px-6 lg:px-8">
                <Link className="" href="/">
                    <Image
                        src="/assets/image/logo.svg"
                        width="0"
                        height="0"
                        alt="Logo"
                        priority
                        className="hidden md:block absolute top-10 left-10 right-0 w-auto h-10"
                    />
                </Link>
                {children}
            </div>
        </div>
    )
}
