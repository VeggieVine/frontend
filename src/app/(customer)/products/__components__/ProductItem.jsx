import React from "react"
import Image from "next/image"
import Link from "next/link"

const ProductItem = ({ imageSrc, name, price, renderButtons }) => {
    return (
        <div className="w-auto h-full rounded-[16px] border-2 shadow-lg">
            <Link href="">
                <div className="relative flex flex-row items-center content-center justify-between px-6 py-3">
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
                        src={imageSrc}
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
                </div>
            </Link>
            {renderButtons && renderButtons()}
        </div>
    )
}

export default ProductItem
