'use client';

import { auth } from '@/auth';
import Navbar from '@/src/app/__components__/Navbar';
import Footer from '@/src/app/__components__/Footer';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LandingPage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { user } = await auth() || {};
            setUser(user);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-section');
        const options = {
            threshold: 0.15,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    entry.target.classList.remove('fade-out');
                } else {
                    entry.target.classList.add('fade-out');
                    entry.target.classList.remove('fade-in');
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeOut {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                }

                .fade-section {
                    opacity: 0;
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }

                .fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }

                .fade-out {
                    animation: fadeOut 0.6s ease-out forwards;
                }

                .header-animation {
                    animation: fadeIn 1s ease-out forwards;
                }

                .image-hover-effect {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .card {
                    background-color: white;
                    border-radius: 0.75rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                    width: 320px;
                    height: 220px;
                }

                .card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                }

                .card img {
                    max-width: 100%;
                    height: auto;
                }

                .card-text {
                    position: absolute;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    width: 100%;
                    text-align: center;
                    padding: 0.5rem;
                    background: none;
                    color: black;
                    font-weight: bold;
                }
            `}</style>
            <div className="w-full h-full tracking-wide bg-white">
                <Navbar user={user} />
                <div className="flex items-center content-center justify-center w-full h-full mb-[-200px]">
                    <div className="relative h-full">
                        <Image
                            src="/assets/image/main.svg"
                            alt="Fresh Produce"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto px-3"
                        />
                        <div className="absolute text-white top-64 left-20 header-animation">
                            <h1 className="font-bold text-[38px]">
                                Menyediakan Berbagai
                                <br />
                                Macam Pilihan Sayur
                                <br />
                                Dan Buah-buahan Segar
                            </h1>
                            <p className="pt-4 text-lg font-medium">
                                Kami membantu memenuhi kebutuhan
                                <br />
                                harian Anda dengan sayur dan buah berkualitas terjamin.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="manfaat" className="pb-8 fade-section">
                    <div className="flex justify-center">
                        <h2 className="text-3xl font-bold text-center text-tertiary">Kenapa Harus Makan Sayur dan Buah?</h2>
                    </div>
                    <div className="flex justify-center pt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-16 gap-x-4 md:gap-x-16">
                            <div className="flex flex-col items-center image-hover-effect">
                                <Image
                                    src="/assets/image/pokcoy.svg"
                                    alt="Sayur Pokcoy"
                                    width={250}
                                    height={250}
                                    className="w-auto h-auto"
                                />
                                <p className="pt-2 text-lg font-bold text-center text-tertiary">Kaya Akan Nutrisi</p>
                                <p className="pt-4 text-base text-center text-black">
                                    Sayur dan buah merupakan sumber alami vitamin, mineral, serat, dan antioksidan yang penting untuk menjaga kesehatan tubuh secara keseluruhan.
                                </p>
                            </div>
                            <div className="flex flex-col items-center image-hover-effect">
                                <Image
                                    src="/assets/image/brokoli.svg"
                                    alt="Sayur Brokoli"
                                    width={225}
                                    height={225}
                                    className="w-auto h-auto"
                                />
                                <p className="pt-2 text-lg font-bold text-center text-tertiary">Mendukung Sistem Pencernaan</p>
                                <p className="pt-4 text-base text-center text-black">
                                    Serat yang tinggi dalam sayur dan buah membantu menjaga kesehatan saluran pencernaan, mencegah sembelit, dan mengurangi risiko terkena penyakit usus besar.
                                </p>
                            </div>
                            <div className="flex flex-col items-center image-hover-effect">
                                <Image
                                    src="/assets/image/alpukat.svg"
                                    alt="Buah Alpukat"
                                    width={210}
                                    height={210}
                                    className="w-auto h-auto"
                                />
                                <p className="pt-2 text-lg font-bold text-center text-tertiary">Mengoptimalkan Fungsi Otak</p>
                                <p className="pt-4 text-base text-center text-black">
                                    Beberapa nutrisi dalam sayur dan buah, seperti vitamin C, vitamin K, dan antioksidan, dapat membantu meningkatkan fungsi otak, kognisi, dan memori.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-gradient-to-tr from-primary to-[#36C770] mb-8 fade-section">
                    <div className="px-3 md:px-1 py-8">
                    <p className="pb-4 text-3xl font-bold text-white">Kategori Sayur</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 card-container"> 
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/kentang.png"
                                    alt="kentang"
                                    width={300}
                                    height={250}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Kentang</p>
                                </div>
                            </div>
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/daunbawang.png"
                                    alt="daunbawang"
                                    width={350}
                                    height={300}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Daun Bawang</p>
                                </div>
                            </div>
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/timun.png"
                                    alt="timun"
                                    width={300}
                                    height={200}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Timun</p>
                                </div>
                            </div>
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/pokcoy.png"
                                    alt="pokcoy"
                                    width={250}
                                    height={200}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Pokcoy</p>
                                </div>
                            </div>
                        </div>
                        <p className="pt-8 pb-8 text-3xl font-bold text-white">Kategori Buah</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 card-container">
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/persik.png"
                                    alt="peach"
                                    width={250}
                                    height={200}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Peach</p>
                                </div>
                            </div>
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/alpukat.png"
                                    alt="alpukat"
                                    width={250}
                                    height={300}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Alpukat</p>
                                </div>
                            </div>
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/kiwi.png"
                                    alt="kiwi"
                                    width={250}
                                    height={200}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Kiwi</p>
                                </div>
                            </div>
                            <div className="card image-hover-effect">
                                <Image
                                    src="/assets/image/mangga.png"
                                    alt="mangga"
                                    width={200}
                                    height={100}
                                    className="w-auto h-auto"
                                />
                                <div className="card-text">
                                    <p>Mangga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}