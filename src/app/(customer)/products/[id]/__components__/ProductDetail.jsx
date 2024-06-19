"use client"

import { useState } from "react"
import Image from "next/image"

import { useAuth } from "@/src/hooks/useAuth"

import { CartSVG, InfoSVG } from "@/src/app/__components__/ui/Icons"
import ActionButton from "@/src/app/__components__/ui/ActionButton"
import { useRouter } from "next/navigation"
import axios from "@/src/lib/axios"

export default function ProductDetail ({ product }) {
    const { user } = useAuth({middleware: "guest"})
    const router = useRouter()
    const [quantity, setQuantity] = useState(1)

    const handleAddToCart = async () => {
        if(!user) {
            alert('Silakan login terlebih dahulu untuk menambahkan produk ke keranjang.')
            router.push('/login')
        } 
        else {
            const cartItems = {
                customer_id: user.id, 
                product_id: product.id, 
                quantity: quantity
            }

            try {
                const response = await axios.post('api/carts', cartItems)

                alert(response.data.message)

                router.push('/cart')
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    if (!product) {
        return (
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                        <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                            404
                        </div>

                        <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                            Mohon Maaf, Produk Yang Dituju Tidak Dapat Ditemukan
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="card justify-center items-center border-2 border-primary shadow max-w-screen-xl mx-auto mt-24 p-6 space-y-8 lg:space-y-0 lg:flex-row lg:gap-x-16 lg:-8">
            <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/${product.image}`}
                width={500}
                height={500}
                alt={product.name}
                className="w-auto h-auto"
            />
            <div className="flex flex-col gap-y-4">
                <h1 className="text-4xl font-semibold text-primary">
                    {product.name}
                </h1>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{product.category.type}</div> 
                </div>
                {/* COLLAPSE */}
                <div tabIndex={0} className="collapse collapse-open shadow">
                    <div className="collapse-title text-lg font-medium">
                        Informasi Produk
                    </div>
                    <div className="collapse-content space-y-2" >
                        <p>{product.description}</p>
                        <p className="font-semibold">Sumber: Perkebunan {product.harvested_from}</p>
                        <p className="font-semibold">Tanggal Panen: {product.harvested_at}</p>
                    </div>
                </div>
                {/* STATS */}
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Harga/pack (0,9 - 1kg)</div>
                        <div className="stat-value text-accent">Rp. {product.price}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Sisa stok</div>
                        <div className="stat-value text-primary">{product.stock}</div>
                    </div>
                </div>
                {/* ALERT */}
                <div className="flex gap-x-2 items-center">
                    <InfoSVG className="w-8 h-8 stroke-warning" />
                    <div className="italic">{`Tahan ${product.storage_life} hari setelah dipanen`}</div>
                </div>
                {(() => {
                    if (user?.role !== 'admin') {
                        return (
                            <>
                                {/* STATS */}
                                <div className="stats">
                                    <div className="stat">
                                        <div className="stat-title">Jumlah Pembelian</div>
                                        <div className="flex justify-between items-center">
                                            <button
                                                onClick={handleDecrement}
                                                className="btn btn-square btn-primary"
                                            >
                                                -
                                            </button>
                                            <span className="stat-value">{quantity}</span>
                                            <button
                                                onClick={handleIncrement}
                                                className="btn btn-square btn-primary"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="stat">
                                        <div className="stat-title">Total Bayar</div>
                                        <div className="stat-value">Rp. {quantity * product.price}</div>
                                    </div>
                                </div>
                                {/* ADD TO CART */}
                                <div className="flex self-end w-60">
                                    <ActionButton
                                        id="btn-add-to-cart" 
                                        onClick={(event) => handleAddToCart(event)}
                                        variant={'solid'}
                                    >
                                        <CartSVG className="w-6 h-6 stroke-current" />
                                        Tambahkan Ke Keranjang
                                    </ActionButton>
                                </div>
                            </>
                        )
                    }
                })()}
            </div>
        </div>
    )
}