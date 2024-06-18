"use client"

import Link from "next/link"
import Image from "next/image"

import { useAuth } from "@/src/hooks/useAuth"

import ActionButton from "@/src/app/__components__/ui/ActionButton"
import LinkButton from "@/src/app/__components__/ui/LinkButton"
import { ProfileSVG, ExitSVG } from "@/src/app/__components__/ui/Icons"

export default function Sidebar() {
    const { user, logout } = useAuth({ middleware: "guest" })

    return (
        <>
            <nav className="navbar fixed top-0 left-0 right-0 mx-auto z-50 border-b border-[#17A04E] bg-primary px-8">
                <div className="navbar-start">
                    <Link href="/">
                        <Image
                            src="/assets/image/logo.svg"
                            width="100"
                            height="100"
                            alt="Logo"
                            className="w-40 h-auto"
                            priority
                        />
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <button
                            type="button"
                            className="btn btn-ghost font-bold uppercase avatar justify-start"
                        >
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="User Avatar"
                                    src={
                                        user?.avatar ||
                                        "/assets/image/profile.jpg"
                                    }
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <span className="hidden text-base-content lg:block">
                                {user?.name}
                            </span>
                        </button>
                        <ul className="dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-60">
                            <li>
                                <LinkButton
                                    id="profile-button"
                                    tooltip="Profile"
                                    destination="/profile"
                                    variant="ghost"
                                >
                                    <ProfileSVG className="w-6 h-6 stroke-base-content group-hover:stroke-primary" />
                                    <span>Profil Saya</span>
                                </LinkButton>
                            </li>
                            <li>
                                <ActionButton
                                    id="logout-button"
                                    variant="ghost"
                                    onClick={() => logout()}
                                >
                                    <ExitSVG className="w-6 h-6 stroke-base-content group-hover:stroke-primary" />
                                    <span>Logout</span>
                                </ActionButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <aside
                className="fixed top-0 left-0 z-40 w-fit lg:w-64 h-screen pt-20 transition-transform border-r border-[#17A04E] sm:translate-x-0 bg-primary"
                aria-label="Sidebar"
            >
                <div className="h-full lg:px-3 pb-4 overflow-y-auto">
                    <div className="space-y-2 font-medium">
                        <Link
                            href="/admin"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#5CAF7D] group"
                        >
                            <span className="ms-3">Dashboard</span>
                        </Link>
                        <Link
                            href="/admin/products"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#5CAF7D] group"
                        >
                            <span className="ms-3">Data Barang</span>
                        </Link>
                        <Link
                            href="/admin/orders"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#5CAF7D] group"
                        >
                            <span className="flex-1 ms-3 whitespace-nowrap">
                                Pesanan Masuk
                            </span>
                            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-black bg-blue-100 rounded-full">
                                3
                            </span>
                        </Link>
                        <Link
                            href="/admin/invoices"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#5CAF7D] group"
                        >
                            <span className="ms-3">Invoice</span>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}
