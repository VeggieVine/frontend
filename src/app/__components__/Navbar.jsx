"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
// import { signOut } from 'next-auth/react'
import Image from "next/image"
import Link from "next/link"

import { useAuth } from "@/src/hooks/useAuth"

import LinkButton from "@/src/app/__components__/ui/LinkButton"
import ActionButton from "@/src/app/__components__/ui/ActionButton"
import {
    ExitSVG,
    ProfileSVG,
    CartSVG,
    HamburgerSVG,
    HomeSVG,
    NotificationSVG,
} from "@/src/app/__components__/ui/Icons"

export default function Navbar() {
    const { user, logout } = useAuth({ middleware: "guest" })

    const pathname = usePathname()
    const [navbarBg, setNavbarBg] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            if (currentScrollPos > 20) {
                setNavbarBg("bg-base-100 border-b-2 border-primary")
            } else {
                setNavbarBg("")
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            className={`${navbarBg} navbar fixed top-0 left-0 right-0 mx-auto z-50 max-w-screen-xl rounded-btn`}
        >
            <div className="navbar-start gap-x-2">
                <div className="dropdown">
                    <button type="button" className="btn btn-ghost">
                        <span className="sr-only">Hamburger Icon</span>
                        <HamburgerSVG className="h-6 w-6 stroke-primary" />
                    </button>
                    <ul className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-2 border-primary rounded-box w-60">
                        <li>
                            <LinkButton
                                id="home-sm-button"
                                tooltip="Home"
                                destination="/"
                                variant="ghost"
                            >
                                <HomeSVG
                                    className={`w-6 h-6 group-hover:stroke-primary ${pathname === "/" ? "stroke-primary" : "stroke-base-content"}`}
                                />
                                <span>Home</span>
                            </LinkButton>
                        </li>
                        <li>
                            <LinkButton
                                id="products-sm-button"
                                tooltip="Products"
                                destination="/products"
                                variant="ghost"
                            >
                                <HomeSVG
                                    className={`w-6 h-6 group-hover:stroke-primary ${pathname === "/products" ? "stroke-primary" : "stroke-base-content"}`}
                                />
                                <span>Products</span>
                            </LinkButton>
                        </li>
                        <li>
                            <LinkButton
                                id="advantage-sm-button"
                                tooltip="Advantage"
                                destination="/advantage"
                                variant="ghost"
                            >
                                <HomeSVG
                                    className={`w-6 h-6 group-hover:stroke-primary ${pathname === "/advantage" ? "stroke-primary" : "stroke-base-content"}`}
                                />
                                <span>Advantage</span>
                            </LinkButton>
                        </li>
                        <li>
                            <LinkButton
                                id="contact-sm-button"
                                tooltip="Contact"
                                destination="/contact"
                                variant="ghost"
                            >
                                <HomeSVG
                                    className={`w-6 h-6 group-hover:stroke-primary ${pathname === "/contact" ? "stroke-primary" : "stroke-base-content"}`}
                                />
                                <span>Contact</span>
                            </LinkButton>
                        </li>
                    </ul>
                </div>
                <Link className="" href="/">
                    <Image
                        src="/assets/image/logo.svg"
                        width="100"
                        height="100"
                        alt="Logo"
                        className="w-40 h-auto"
                    />
                </Link>
            </div>
            <div className="navbar-end gap-x-2">
                {(() => {
                    if (user) {
                        return (
                            <>
                                {/* CART */}
                                <div className="dropdown dropdown-end">
                                    <button
                                        type="button"
                                        className="btn btn-ghost btn-square"
                                    >
                                        <div className="indicator">
                                            <CartSVG className="w-6 h-6 stroke-secondary" />
                                            <span className="badge badge-sm indicator-item">
                                                8
                                            </span>
                                        </div>
                                    </button>
                                    <div className="dropdown-content mt-3 z-10 shadow bg-base-100 border-2 border-secondary rounded-box w-60">
                                        <div className="card-body">
                                            <span className="font-bold text-lg">
                                                8 Items
                                            </span>
                                            <span className="text-info">
                                                Subtotal: Rp99.900
                                            </span>
                                            <div className="card-actions">
                                                <button className="btn btn-secondary btn-block">
                                                    View cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* NOTIFICATION */}
                                <div className="dropdown dropdown-end">
                                    <button
                                        type="button"
                                        className="btn btn-ghost btn-square"
                                    >
                                        <div className="indicator">
                                            <NotificationSVG className="w-6 h-6 stroke-accent" />
                                            <span className="badge badge-sm indicator-item">
                                                8
                                            </span>
                                        </div>
                                    </button>
                                    <div className="dropdown-content mt-3 z-10 shadow bg-base-100 border-2 border-accent rounded-box w-60">
                                        <div className="card-body">
                                            <span className="font-bold text-lg">
                                                8 Items
                                            </span>
                                            <span className="text-info">
                                                Subtotal: Rp99.900
                                            </span>
                                            <div className="card-actions">
                                                <button className="btn btn-accent btn-block">
                                                    View cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* PROFILE */}
                                <div className="dropdown dropdown-end">
                                    <button
                                        type="button"
                                        className="btn btn-ghost font-bold uppercase avatar justify-start"
                                    >
                                        <div className="w-10 rounded-full">
                                            <Image
                                                alt="User Avatar"
                                                src={
                                                    user?.image ||
                                                    "/assets/image/brokoli.svg"
                                                }
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <span className="hidden text-base-content lg:block">
                                            {user?.name}
                                        </span>
                                    </button>
                                    <ul className="dropdown-content mt-3 z-10 p-2 shadow bg-base-100 border-2 border-primary rounded-box w-60">
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
                            </>
                        )
                    }
                    return (
                        <>
                            <LinkButton
                                id="login-button"
                                tooltip="Login"
                                destination="/login"
                                variant="ghost"
                            >
                                Masuk
                            </LinkButton>
                            <LinkButton
                                id="login-button"
                                tooltip="Daftar"
                                destination="/register"
                                variant="solid"
                            >
                                Daftar
                            </LinkButton>
                        </>
                    )
                })()}
            </div>
        </nav>
    )
}
