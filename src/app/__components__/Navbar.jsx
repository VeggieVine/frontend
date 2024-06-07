'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { signOut } from 'next-auth/react';

import LinkButton from '@/src/app/__components__/ui/LinkButton';
import ActionButton from '@/src/app/__components__/ui/ActionButton';
import { TbLogin2 } from 'react-icons/tb';
import { IoMdPersonAdd, IoMdCart } from 'react-icons/io';
import { ExitSVG, ProfileSVG } from './ui/Icons';

export default function Navbar({ user }) {
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
                                            destination="/"
                                            variant="ghost"
                                        >
                                            <ProfileSVG className={`w-6 h-6 group-hover:stroke-secondary ${location.pathname === '/settings/profile' ? 'stroke-secondary ' : 'stroke-base-content'}`} />
                                            <span>Profil Saya</span>
                                        </LinkButton>
                                    </li>
                                    <li>
                                        <ActionButton
                                            id="logout-button"
                                            variant="ghost"
                                            onClick={() => signOut()}
                                        >
                                            <ExitSVG className="w-6 h-6 stroke-base-content group-hover:stroke-secondary" />
                                            <span>Logout</span>
                                        </ActionButton>
                                    </li>
                                </ul>
                            </div>
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
                                tooltip="Register"
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
