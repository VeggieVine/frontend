/* eslint-disable linebreak-style */
import Navbar from "@/src/app/__components__/Navbar"
import Footer from "@/src/app/__components__/Footer"
import Image from "next/image"

export default function AdvantagePage() {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl min-h-screen mx-auto px-6 lg:px-8">
                <div className="py-16 space-y-12">
                    <h2 className="text-3xl font-bold text-center text-primary">
                        Kenapa Harus Makan Sayur dan Buah?
                    </h2>
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
                            <p className="pt-4 text-base text-center">
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
                            <p className="pt-4 text-base text-center">
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
                            <p className="pt-4 text-base text-center">
                                Beberapa nutrisi dalam sayur dan buah, seperti
                                vitamin C, vitamin K, dan antioksidan, dapat
                                membantu meningkatkan fungsi otak, kognisi, dan
                                memori.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    <div className="max-w-screen-lg mx-auto px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-primary mb-8">
                            Tips Mengonsumsi Buah dan Sayur yang Sehat
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-primary mb-2">Variasi</h3>
                                <p className="text-base">Cobalah untuk mengonsumsi berbagai jenis buah dan sayuran setiap hari. Semakin beragam pilihan Anda, semakin banyak nutrisi yang Anda dapatkan.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-primary mb-2">Porsi yang Seimbang</h3>
                                <p className="text-base">Pastikan Anda mengonsumsi porsi yang seimbang antara buah dan sayur. Berbagai warna pada piring Anda menandakan berbagai nutrisi yang Anda dapatkan.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-primary mb-2">Minimalisir Pengolahan</h3>
                                <p className="text-base">Hindari memasak buah dan sayur terlalu lama atau menggunakan metode pengolahan yang mengurangi nutrisinya, seperti penggorengan yang berlebihan atau pemanggangan dengan minyak yang banyak.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-primary mb-2">Cuci dengan Bersih</h3>
                                <p className="text-base">Pastikan untuk mencuci buah dan sayur dengan bersih sebelum mengonsumsinya untuk menghilangkan residu pestisida atau kotoran lainnya.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-12">
                    <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center bg-white p-8 rounded-lg shadow-md">
                            <div className="lg:w-1/2">
                                <Image
                                    src="/assets/image/veggie.jpeg"
                                    alt="Logo VeggieVine"
                                    width={500}
                                    height={500}
                                    className="w-auto h-auto"
                                    style={{ backgroundColor: 'transparent' }}
                                />
                            </div>
                            <div className="lg:w-1/2 lg:ml-4"> 
                                <p className="text-2xl font-bold text-primary mb-8">VeggieVine hadir untuk memenuhi kebutuhan organik sehari-hari Anda dengan menyediakan sayur dan buah segar berkualitas</p>
                                <p className="text-lg mt-4"> 
                                    Mengapa Harus VeggieVine?
                                </p>
                                <p className="text-base mt-4 font-bold"> 
                                    100% Organik & Sehat
                                </p>
                                <p className="text-base mt-4 font-bold"> 
                                    Kualitas Premiun
                                </p>
                                <p className="text-base mt-4 font-bold"> 
                                    Kenyamanan Berbelanja
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
