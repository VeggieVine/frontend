'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full h-[260px] p-12 text-white bg-primary">
            <div className="container">
                <div className="flex justify-between">
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">Hubungi Kami</h5>
                        <ul>
                            <li className="mb-2">
                                <span className="font-semibold">Address: </span>Jl. Permata Regensi No.45,<br /> Jakarta, Jawa Barat, Indonesia
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Phone: </span>(62) 85425273511
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Hours: </span>08.00-18.00
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">Kategori Populer</h5>
                        <ul>
                            <li className="mb-2">Sayur - mayur</li>
                            <li className="mb-2">Buah - buahan</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">Navigasi</h5>
                        <ul>
                            <li className="mb-2"><Link href="/">Beranda</Link></li>
                            <li className="mb-2"><Link href="/product">Produk</Link></li>
                            <li className="mb-2"><Link href="/manfaat">Manfaat</Link></li>
                            <li className="mb-2">Kontak</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">Secured Payment Gateway</h5>
                        <ul>
                            <li className="mb-2">Pembayaran aman dan terpercaya.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
