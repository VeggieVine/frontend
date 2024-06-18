import React from "react"
import Image from "next/image"
import Link from "next/link"

const ProductItem = ({ id, name, description, imageSource,  price, harvestedAt }) => {
    return (
        <div className="card max-h-96 shadow-sm shadow-primary">
            <figure>
                <Image
                    src={imageSource}
                    alt={name}
                    priority
                    width={250}
                    height={250}
                    className="w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">At: {harvestedAt}</div>
                </h2>
                <p className="truncate">{description}</p>
                <div className="card-actions justify-between items-center">
                    <h2 className="card-title text-primary">Rp.{price}</h2>
                    <Link href={`/products/${id}`} className="btn btn-primary">Lihat Detail</Link>
                </div>
            </div>

            {/* <div className="relative flex flex-row items-center content-center justify-between px-6 py-3">
                    <p className="text-lg font-bold">{name}</p>
                    <Image
                        src="/assets/image/logo.svg"
                        priority
                        alt="Logo"
                        width={50}
                        height={50}
                        className="hidden md:block w-auto h-8"
                    />
                </div>
                <div>
                    <Image
                        src={imageSource}
                        alt={name}
                        width={500}
                        height={500}
                        className="w-full h-[200px] pb-2"
                    />
                </div>
                <hr className="mb-2 border-gray-500 border-1" />
                <div className="px-6 pb-4">
                    <p className="text-lg font-bold text-secondary">
                        Rp. {price}
                    </p>
                    <p className="text-base font-semibold text-secondary">
                        1 Pack = 950 - 1.050 gram
                    </p>
                </div> */}
        </div>
    )
}

export default ProductItem
