'use client';

import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import Products from '../../components/product';

function HomePage() {
  return (
    <>
      <div className='w-full h-full tracking-wide'>
        <Navbar />
        <div className='flex items-center content-center justify-center w-full h-full mb-[-260px]'>
          <div className='relative h-full'>
            <Image
              className='px-3'
              src='/assets/image/main.svg'
              alt='Fresh Produce'
              height='300'
              width='1350'
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
        {/* <Products /> */}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
