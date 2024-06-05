'use client';

import Footer from '../__components__/footer';
import Navbar from '../__components__/navbar';
import Image from 'next/image';
import TestimonialCard from './__components__/Card';

function HomePage() {
  return (
    <>
      <div className='w-full h-full tracking-wide'>
        <Navbar />
        <div className='flex items-center content-center justify-center w-full h-full mb-[-200px]'>
          <div className='relative h-full'>
            <Image
              src='/assets/image/main.svg'
              alt='Fresh Produce'
              width={0}
              height={0}
              sizes='100vw'
              className='w-auto h-auto px-3'
            />
            <div className='absolute text-white top-64 left-20 '>
              <h1 className='font-bold text-[38px]'>
                Menyediakan Berbagai
                <br />
                Macam Pilihan Sayur
                <br />
                Dan Buah-buahan Segar
              </h1>
              <p className='pt-4 text-lg font-medium'>
                Kami membantu memenuhi kebutuhan
                <br />
                harian Anda dengan sayur dan buah berkualitas terjamin.
              </p>
            </div>
          </div>
        </div>
        <div className='pb-8'>
          <div className='flex justify-center'>
            <h2 className='text-3xl font-bold text-center text-tertiary'>
              Kenapa Harus Makan Sayur dan Buah?
            </h2>
          </div>
          <div className='flex items-center content-center justify-center pt-8'>
            <div className='flex flex-row justify-between space-x-8'>
              <div className='flex flex-col items-center'>
                <Image
                  src='/assets/image/pokcoy.svg'
                  alt='Sayur Pokcoy'
                  width={250}
                  height={250}
                  className='w-[250px] h-[250px]'
                />
                <p className='pt-2 text-lg font-bold text-center text-tertiary'>
                  Kaya Akan Nutrisi
                </p>
                <p className='pt-4 text-base text-center text-black w-[380px]'>
                  Sayur dan buah merupakan sumber alami vitamin, mineral, serat,
                  dan antioksidan yang penting untuk menjaga kesehatan tubuh
                  secara keseluruhan.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <Image
                  src='/assets/image/brokoli.svg'
                  alt='Sayur Brokoli'
                  width={225}
                  height={225}
                  className='w-[250px] h-[250px]'
                />
                <p className='pt-2 text-lg font-bold text-center text-tertiary'>
                  Mendukung Sistem Pencernaan
                </p>
                <p className='pt-4 text-base text-center text-black w-[380px]'>
                  Serat yang tinggi dalam sayur dan buah membantu menjaga
                  kesehatan saluran pencernaan, mencegah sembelit, dan
                  mengurangi risiko terkena penyakit usus besar.
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <Image
                  src='/assets/image/alpukat.svg'
                  alt='Buah Alpukat'
                  width={210}
                  height={210}
                  className='w-[250px] h-[250px]'
                />
                <p className='pt-2 text-lg font-bold text-center text-tertiary'>
                  Mengoptimalkan Fungsi Otak
                </p>
                <p className='pt-4 text-base text-center text-black w-[380px]'>
                  Beberapa nutrisi dalam sayur dan buah, seperti vitamin C,
                  vitamin K, dan antioksidan, dapat membantu meningkatkan fungsi
                  otak, kognisi, dan memori.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-full bg-gradient-to-tr from-primary to-[#36C770] mb-8'>
          <div className='px-8 py-8'>
            <p className='pb-4 text-3xl font-bold text-white'>Kategori Sayur</p>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/kentang.png'
                    alt='kentang'
                    width={300}
                    height={250}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Kentang
                </p>
              </div>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/daunbawang.png'
                    alt='daunbawang'
                    width={300}
                    height={250}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Daun Bawang
                </p>
              </div>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/timun.png'
                    alt='timun'
                    width={300}
                    height={250}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Timun
                </p>
              </div>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/pokcoy.png'
                    alt='pokcoy'
                    width={175}
                    height={125}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Pokcoy
                </p>
              </div>
            </div>
            <p className='pt-8 pb-4 text-3xl font-bold text-white'>
              Kategori Buah
            </p>
            <div className='flex flex-row justify-between'>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/persik.png'
                    alt='peach'
                    width={250}
                    height={200}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Peach
                </p>
              </div>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/alpukat.png'
                    alt='alpukat'
                    width={250}
                    height={200}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Alpukat
                </p>
              </div>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/kiwi.png'
                    alt='kiwi'
                    width={250}
                    height={200}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>Kiwi</p>
              </div>
              <div>
                <div className='flex justify-center items-center content-center w-[300px] h-[200px] bg-white rounded-xl shadow-lg py-4 pb-2'>
                  <Image
                    src='/assets/image/mangga.png'
                    alt='mangga'
                    width={250}
                    height={200}
                    className='w-auto h-auto'
                  />
                </div>
                <p className='text-lg font-bold text-center text-black'>
                  Mangga
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-full py-12'>
          <p className='text-3xl font-bold text-center text-secondary'>
            Apa Kata Mereka
          </p>
          <p className='pt-8 text-lg font-medium text-center text-secondary'>
            Simak Kisah mereka dapat penghasilan tambahan via MerdekaWorks. Kini
            giliranmu!
          </p>
          <div className='flex flex-row justify-between px-8 pt-24'>
            <TestimonialCard
              imageSrc='/assets/image/profile.jpg'
              name='John Doe'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis mattis dolor, vel sagittis turpis tristique ac. Aenean efficitur, purus et pellentesque rhoncus, libero augue aliquam libero, eu auctor ipsum felis in leo. Etiam at lobortis erat, ac volutpat sapien. Pellentesque laoreet in magna non aliquet. Quisque et varius ligula, sit amet imperdiet lorem. Pellentesque rutrum nisl in nunc consectetur, nec sagittis enim vestibulum. Ut vel orci at libero placerat ultrices quis vitae leo. Aliquam convallis tellus ex, sed fringilla eros malesuada at. Phasellus tempus ut nibh nec lobortis. Suspendisse porttitor condimentum diam ut auctor. Sed et hendrerit tellus, eu iaculis sapien.'
            />
            <TestimonialCard
              imageSrc='/assets/image/profile.jpg'
              name='John Doe'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis mattis dolor, vel sagittis turpis tristique ac. Aenean efficitur, purus et pellentesque rhoncus, libero augue aliquam libero, eu auctor ipsum felis in leo. Etiam at lobortis erat, ac volutpat sapien. Pellentesque laoreet in magna non aliquet. Quisque et varius ligula, sit amet imperdiet lorem. Pellentesque rutrum nisl in nunc consectetur, nec sagittis enim vestibulum. Ut vel orci at libero placerat ultrices quis vitae leo. Aliquam convallis tellus ex, sed fringilla eros malesuada at. Phasellus tempus ut nibh nec lobortis. Suspendisse porttitor condimentum diam ut auctor. Sed et hendrerit tellus, eu iaculis sapien.'
            />
            <TestimonialCard
              imageSrc='/assets/image/profile.jpg'
              name='John Doe'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis mattis dolor, vel sagittis turpis tristique ac. Aenean efficitur, purus et pellentesque rhoncus, libero augue aliquam libero, eu auctor ipsum felis in leo. Etiam at lobortis erat, ac volutpat sapien. Pellentesque laoreet in magna non aliquet. Quisque et varius ligula, sit amet imperdiet lorem. Pellentesque rutrum nisl in nunc consectetur, nec sagittis enim vestibulum. Ut vel orci at libero placerat ultrices quis vitae leo. Aliquam convallis tellus ex, sed fringilla eros malesuada at. Phasellus tempus ut nibh nec lobortis. Suspendisse porttitor condimentum diam ut auctor. Sed et hendrerit tellus, eu iaculis sapien.'
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
