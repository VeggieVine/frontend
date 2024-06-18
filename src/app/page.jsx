"use client"

import Navbar from "@/src/app/__components__/Navbar"
import Footer from "@/src/app/__components__/Footer"
import TestimonialCard from "@/src/app/__components__/ui/Card"
import Image from "next/image"
import { useEffect } from "react"

export default function LandingPage() {
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap,js" 
        const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY
        const script = document.createElement('script')
        script.src = snapScript
        script.setAttribute('data-client-key', clientKey)
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <>
            <Navbar />

            <main className="flex tracking-widest max-w-screen-xl min-h-screen lg:min-h-fit lg:max-h-screen mx-auto px-6 lg:px-8 mb-8">
                <div className="relative flex basis-full justify-center items-center">
                    <div className="text-neutral space-y-4">
                        <h1 className="text-6xl font-bold text-center text-primary lg:text-left mb-8">
                            VeggieVine
                        </h1>
                        <h1 className="text-2xl font-semibold text-center lg:text-left">
                            <span>"Tempatnya sayur dan buah-buahan segar yang berkualitas dari perkebunan terbaik di </span>
                            <span className="underline font-black text-error">JABODETABEK</span>"
                        </h1>
                        <blockquote className="text-lg text-center lg:text-left text-wrap">
                            Kami membantu masyarakat JABODETABEK mendapakan buah dan sayur berkualitas hanya dengan beberapa klik saja.
                        </blockquote>
                    </div>
                    <Image
                        src="/assets/image/main-nobg.svg"
                        alt="Main Hero Background"
                        priority
                        width={0}
                        height={0}
                        className="w-auto h-5/6 hidden lg:block"
                    />
                    <div className="absolute left-0 top-1/4 w-[40vw] h-[30vh] mx-auto bg-primary rounded-full opacity-30 mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] animate-blob" />
                    <div className="absolute left-0 lg:right-0 top-1/4 w-[40vw] h-[30vh] mx-auto bg-primary rounded-full opacity-30 mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] animate-blob" />
                    <div className="absolute left-0 lg:left-1/2 bottom-1/4 lg:bottom-0 w-[40vw] h-[30vh] mx-auto bg-primary rounded-full opacity-30 mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] animate-blob" />
                </div>
            </main>
            <div className="flex flex-col max-w-screen-xl min-h-fit mx-auto mb-8 space-y-8 px-6 lg:px-8">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-center text-primary">
                        Kenapa Harus Makan Sayur dan Buah?
                    </h2>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/image/pokcoy.svg"
                                alt="Sayur Pokcoy"
                                width={250}
                                height={250}
                                className="w-auto h-auto"
                            />
                            <p className="pt-2 text-lg font-bold text-center text-tertiary">
                                Kaya Akan Nutrisi
                            </p>
                            <p className="pt-4 text-base text-center w-[380px]">
                                Sayur dan buah merupakan sumber alami vitamin,
                                mineral, serat, dan antioksidan yang penting
                                untuk menjaga kesehatan tubuh secara
                                keseluruhan.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/image/brokoli.svg"
                                alt="Sayur Brokoli"
                                width={225}
                                height={225}
                                className="w-auto h-auto"
                            />
                            <p className="pt-2 text-lg font-bold text-center text-tertiary">
                                Mendukung Sistem Pencernaan
                            </p>
                            <p className="pt-4 text-base text-center w-[380px]">
                                Serat yang tinggi dalam sayur dan buah membantu
                                menjaga kesehatan saluran pencernaan, mencegah
                                sembelit, dan mengurangi risiko terkena penyakit
                                usus besar.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/assets/image/alpukat.svg"
                                alt="Buah Alpukat"
                                width={210}
                                height={210}
                                className="w-auto h-auto"
                            />
                            <p className="pt-2 text-lg font-bold text-center text-tertiary">
                                Mengoptimalkan Fungsi Otak
                            </p>
                            <p className="pt-4 text-base text-center w-[380px]">
                                Beberapa nutrisi dalam sayur dan buah, seperti
                                vitamin C, vitamin K, dan antioksidan, dapat
                                membantu meningkatkan fungsi otak, kognisi, dan
                                memori.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-center text-success">
                        Kategori Sayur
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch items-center content-center justify-center">
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/kentang.png`}
                                alt="kentang"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Kentang</p>
                    </div>
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image 
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/daun-bawang.png`}
                                alt="daun-bawang" 
                                priority 
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">
                            Daun Bawang
                        </p>
                    </div>
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/timun.png`}
                                alt="timun"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Timun</p>
                    </div>
                    <div >
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/pokcoy.png`}
                                alt="pokcoy"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Pokcoy</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-center text-success">
                        Kategori Buah
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch items-center content-center justify-center">
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/persik.png`}
                                alt="peach"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Peach</p>
                    </div>
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/alpukat.png`}
                                alt="alpukat"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Alpukat</p>
                    </div>
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/kiwi.jpg`}
                                alt="kiwi"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Kiwi</p>
                    </div>
                    <div>
                        <div className="relative flex justify-center items-center content-center w-full h-64 py-4 pb-2 rounded-box shadow-sm shadow-primary">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/product-images/mangga.png`}
                                alt="mangga"
                                priority
                                fill
                                className="p-16"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Mangga</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col max-w-screen-xl min-h-fit mx-auto px-6 lg:px-8 mb-8">
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-center text-accent">
                        Apa Kata Mereka Tentang VeggieVine
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-24 mt-24">
                    <TestimonialCard
                        imageSrc="/assets/image/profile.jpg"
                        name="Alice Doe"
                        testimonial="Baru pertama kali belanja di VeggieVine dan saya sangat puas dengan kualitas sayur dan buah yang mereka tawarkan. Harganya pun sangat terjangkau. Terima kasih VeggieVine!"
                    />
                    <TestimonialCard
                        imageSrc="/assets/image/profile.jpg"
                        name="John Doe"
                        testimonial="Terima kasih VeggieVine! Saya sangat puas dengan pelayanan yang diberikan. Sayur dan buah yang saya beli sangat segar dan berkualitas. Harganya pun sangat terjangkau. Saya pasti akan belanja lagi di VeggieVine!"
                    />
                    <TestimonialCard
                        imageSrc="/assets/image/profile.jpg"
                        name="Jane Doe"
                        testimonial="Keren banget VeggieVine! Sayur dan buah yang saya beli sangat segar dan berkualitas. Harganya pun sangat terjangkau. Saya pasti akan belanja lagi di VeggieVine!"
                    />
                </div>
            </div>
            
            <Footer />
        </>
    )
}
