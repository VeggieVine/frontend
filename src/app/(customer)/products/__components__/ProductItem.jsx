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
        </div>
    )
}

export default ProductItem
