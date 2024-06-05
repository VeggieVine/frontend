'use client';

import Footer from '../__components__/footer';
import Navbar from '../__components__/navbar';
import ProductCard from './__components__/Card';

function ProductPage() {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 gap-x-20 gap-y-12 pt-24 pb-16'>
          <ProductCard name='Apel Fuji China' imageSrc='/assets/image/apel.png' price='50000' />
          <ProductCard name='Apel Fuji China' imageSrc='/assets/image/apel.png' price='50000' />
          <ProductCard name='Apel Fuji China' imageSrc='/assets/image/apel.png' price='50000' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;