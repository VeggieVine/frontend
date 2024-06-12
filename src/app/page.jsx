import Navbar from '@/src/app/__components__/Navbar'
import Footer from '@/src/app/__components__/Footer'
import TestimonialCard from '@/src/app/__components__/ui/Card'
import Image from 'next/image'

export default function LandingPage() {

    return (
        <>
            <Navbar />
            <div className="flex tracking-widest max-w-screen-xl min-h-screen mx-auto px-6 lg:px-8">
                <div className="overflow-hidden flex basis-full justify-center items-center">
                    <div className="text-neutral space-y-4">
                        <h1 className="text-6xl font-bold text-center text-success lg:text-left mb-8">VeggieVine</h1>
                        <h1 className="text-3xl font-semibold text-center lg:text-left">
                            Menyediakan Berbagai
                            <br />
                            Macam Pilihan Sayur
                            <br />
                            Dan Buah-buahan Segar
                        </h1>
                        <blockquote className="text-lg text-center lg:text-left">
                            Kami membantu memenuhi kebutuhan
                            <br />
                            harian Anda dengan sayur dan buah berkualitas terjamin.
                        </blockquote>
                    </div>
                    <Image
                        src="/assets/image/main-nobg.svg"
                        alt="Fresh Produce"
                        priority
                        width={0}
                        height={0}
                        className="w-auto h-auto hidden lg:block"
                    />
                    <div className="fixed left-0 top-1/4 w-[40vw] h-[30vh] bg-primary rounded-full opacity-30 mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] animate-blob"/>
                    <div className="fixed right-0 top-1/4 w-[40vw] h-[30vh] bg-primary rounded-full opacity-30 mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] animate-blob"/>
                    <div className="fixed left-1/2 bottom-1/4 lg:bottom-0 w-[40vw] h-[30vh] bg-primary rounded-full opacity-30 mix-blend-multiply blur-3xl lg:h-[60vh] lg:w-[40vw] animate-blob"/>
                </div>
            </div>
            <div className="max-w-screen-xl min-h-fit mx-auto mb-8 space-y-8 px-6 lg:px-8">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-center text-primary">Kenapa Harus Makan Sayur dan Buah?</h2>
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
                            <p className="pt-2 text-lg font-bold text-center text-tertiary">Kaya Akan Nutrisi</p>
                            <p className="pt-4 text-base text-center w-[380px]">
                                Sayur dan buah merupakan sumber alami vitamin, mineral, serat, dan antioksidan yang penting untuk menjaga kesehatan tubuh secara keseluruhan.
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
                            <p className="pt-2 text-lg font-bold text-center text-tertiary">Mendukung Sistem Pencernaan</p>
                            <p className="pt-4 text-base text-center w-[380px]">
                                Serat yang tinggi dalam sayur dan buah membantu menjaga kesehatan saluran pencernaan, mencegah sembelit, dan mengurangi risiko terkena penyakit usus besar.
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
                            <p className="pt-2 text-lg font-bold text-center text-tertiary">Mengoptimalkan Fungsi Otak</p>
                            <p className="pt-4 text-base text-center w-[380px]">
                                Beberapa nutrisi dalam sayur dan buah, seperti vitamin C, vitamin K, dan antioksidan, dapat membantu meningkatkan fungsi otak, kognisi, dan memori.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-center text-success">Kategori Sayur</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/kentang.png"
                                alt="kentang"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Kentang</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/daunbawang.png"
                                alt="daunbawang"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Daun Bawang</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/timun.png"
                                alt="timun"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Timun</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/pokcoy.png"
                                alt="pokcoy"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Pokcoy</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-center text-success">Kategori Buah</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/persik.png"
                                alt="peach"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Peach</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/alpukat.png"
                                alt="alpukat"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Alpukat</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/kiwi.png"
                                alt="kiwi"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Kiwi</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2">
                            <Image
                                src="/assets/image/mangga.png"
                                alt="mangga"
                                priority
                                width={200}
                                height={200}
                                className="w-auto h-auto"
                            />
                        </div>
                        <p className="text-lg font-bold text-center">Mangga</p>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl min-h-fit mx-auto px-6 lg:px-8 mb-8">
                <div className="flex justify-center">
                    <p className="text-3xl font-bold text-center text-accent">Apa Kata Mereka Tentang VeggieVine</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-24 mt-24">
                    <TestimonialCard
                        imageSrc="/assets/image/profile.jpg"
                        name="John Doe"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis mattis dolor, vel sagittis turpis tristique ac. Aenean efficitur, purus et pellentesque rhoncus, libero augue aliquam libero, eu auctor ipsum felis in leo. Etiam at lobortis erat, ac volutpat sapien. Pellentesque laoreet in magna non aliquet. Quisque et varius ligula, sit amet imperdiet lorem. Pellentesque rutrum nisl in nunc consectetur, nec sagittis enim vestibulum. Ut vel orci at libero placerat ultrices quis vitae leo. Aliquam convallis tellus ex, sed fringilla eros malesuada at. Phasellus tempus ut nibh nec lobortis. Suspendisse porttitor condimentum diam ut auctor. Sed et hendrerit tellus, eu iaculis sapien."
                    />
                    <TestimonialCard
                        imageSrc="/assets/image/profile.jpg"
                        name="John Doe"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis mattis dolor, vel sagittis turpis tristique ac. Aenean efficitur, purus et pellentesque rhoncus, libero augue aliquam libero, eu auctor ipsum felis in leo. Etiam at lobortis erat, ac volutpat sapien. Pellentesque laoreet in magna non aliquet. Quisque et varius ligula, sit amet imperdiet lorem. Pellentesque rutrum nisl in nunc consectetur, nec sagittis enim vestibulum. Ut vel orci at libero placerat ultrices quis vitae leo. Aliquam convallis tellus ex, sed fringilla eros malesuada at. Phasellus tempus ut nibh nec lobortis. Suspendisse porttitor condimentum diam ut auctor. Sed et hendrerit tellus, eu iaculis sapien."
                    />
                    <TestimonialCard
                        imageSrc="/assets/image/profile.jpg"
                        name="John Doe"
                        testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis mattis dolor, vel sagittis turpis tristique ac. Aenean efficitur, purus et pellentesque rhoncus, libero augue aliquam libero, eu auctor ipsum felis in leo. Etiam at lobortis erat, ac volutpat sapien. Pellentesque laoreet in magna non aliquet. Quisque et varius ligula, sit amet imperdiet lorem. Pellentesque rutrum nisl in nunc consectetur, nec sagittis enim vestibulum. Ut vel orci at libero placerat ultrices quis vitae leo. Aliquam convallis tellus ex, sed fringilla eros malesuada at. Phasellus tempus ut nibh nec lobortis. Suspendisse porttitor condimentum diam ut auctor. Sed et hendrerit tellus, eu iaculis sapien."
                    />
                </div>
            </div>

            <Footer />
        </>
    )
}
