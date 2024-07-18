"use client"

export default function Footer() {
    return (
        <footer className="justify-center p-12 text-white bg-primary hidden lg:flex">
            <div className="container">
                <div className="flex justify-between">
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">Hubungi Kami</h5>
                        <ul>
                            <li>
                                <span className="font-semibold">Alamat: </span>
                                Jakarta Selatan
                            </li>
                            <li>
                                <span className="font-semibold">Kontak: </span>
                                08514444444
                            </li>
                            <li>
                                <span className="font-semibold">Jam: </span>
                                08.00-18.00
                            </li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">
                            Kategori Populer
                        </h5>
                        <ul>
                            <li>Sayur - mayur</li>
                            <li>Buah - buahan</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">Navigasi</h5>
                        <ul>
                            <li>Masuk</li>
                            <li>Produk Kami</li>
                            <li>Keranjang Belanja</li>
                        </ul>
                    </div>
                    <div className="text-left">
                        <h5 className="mb-4 text-xl font-bold">
                            Gerbang Pembayaran Aman
                        </h5>
                        <ul>
                            <li>Pembayaran aman dan terpercaya.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
