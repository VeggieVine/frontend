'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { signOut } from 'next-auth/react';

import LinkButton from '@/src/app/__components__/ui/LinkButton';
import ActionButton from '@/src/app/__components__/ui/ActionButton';
import { ExitSVG, ProfileSVG } from './ui/Icons';

export default function Navbar({ user }) {
    const pathname = usePathname();
    const [navbarBg, setNavbarBg] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 20) {
                setNavbarBg('bg-white shadow-xl');
            } else {
                setNavbarBg('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${navbarBg} navbar fixed top-0 z-50`}>
            <div className="navbar-start">
                <Link
                    className=""
                    href="/"
                >
                    <div className="flex justify-center w-52 h-full">
                        <Image
                            src="/assets/image/logo.svg"
                            width="250"
                            height="250"
                            alt="Logo"
                            className="w-auto h-auto"
                        />
                    </div>
                </Link>
            </div>
            <div className="navbar-center">
                <div className="space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/product">Products</Link>
                    <Link href="/about">Manfaat</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <div className="navbar-end gap-x-2">
                {(() => {
                    if (user) {
                        return (
                            <>
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-outline btn-primary btn-square"
                                    >
                                        <div className="indicator">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>
                                            <span className="badge badge-sm indicator-item">8</span>
                                        </div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                                    >
                                        <div className="card-body">
                                            <span className="font-bold text-lg">8 Items</span>
                                            <span className="text-info">Subtotal: $999</span>
                                            <div className="card-actions">
                                                <button className="btn btn-primary btn-block">View cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <button
                                        type="button"
                                        className="btn btn-ghost font-bold uppercase avatar justify-start"
                                    >
                                        <div className="w-10 rounded-full">
                                            <Image
                                                alt="User Avatar"
                                                src={user?.image}
                                                width="40"
                                                height="40"
                                            />
                                        </div>
                                        <span className="text-base-content">{user?.name}</span>
                                    </button>
                                    <ul className="dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-60">
                                        <li>
                                            <LinkButton
                                                id="profile-button"
                                                tooltip="Profile"
                                                destination="/profile"
                                                variant="ghost"
                                            >
                                                <ProfileSVG
                                                    className={`w-6 h-6 group-hover:stroke-primary ${pathname === '/settings/profile' ? 'stroke-primary ' : 'stroke-base-content'}`}
                                                />
                                                <span>Profil Saya</span>
                                            </LinkButton>
                                        </li>
                                        <li>
                                            <ActionButton
                                                id="logout-button"
                                                variant="ghost"
                                                onClick={() => signOut()}
                                            >
                                                <ExitSVG className="w-6 h-6 stroke-base-content group-hover:stroke-primary" />
                                                <span>Logout</span>
                                            </ActionButton>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        );
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
                    );
                })()}
            </div>
        </nav>
    );
}
