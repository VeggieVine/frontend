'use client';

import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Image from 'next/image';

function HomePage() {
  return (
    <>
      <section className='w-full h-full'>
        <Navbar />
        <div className='w-full h-[300px] pt-[545px] mb-[286px] flex justify-center items-center content-center'>
          <div className='relative'>
            <Image
              className='px-3'
              src='/assets/image/main.svg'
              alt='Fresh Produce'
              height='300'
              width='1350'
            />
            <div className='absolute top-64 left-20'>
              <div className='container text-white'>
                <h1 className='font-bold text-[42px]'>
                  Menyediakan Berbagai
                  <br />
                  Macam Pilihan Sayur
                  <br />
                  Dan Buah-buahan Segar
                </h1>
                <p className='font-medium text-lg pt-4'>
                  Kami membantu memenuhi kebutuhan
                  <br />
                  harian Anda dengan sayur dan buah berkualitas terjamin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
