'use client';

import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import Footer from '../../../__components__/footer';
import Navbar from '../../../__components__/navbar';
import productDetails from '../../productDetails'; 

function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const decodedId = decodeURIComponent(id);
  const product = productDetails[decodedId];

  if (!product) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className='flex justify-center my-20'>
        <div className='w-full max-w-6xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <Image src={product.imageSrc} width={500} height={500} alt={product.name} className='w-full h-auto'/>
            </div>
            <div>
              <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
              <p className='text-xl mb-4'>Harga: Rp {product.price}</p>
              <p className='text-md mb-4'>1 Pack = 950 - 1.050 gram</p>
              <h2 className='text-2xl font-bold mb-2'>Informasi Produk</h2>
              <p className='text-md mb-2'>Kategori: {product.category}</p>
              <p className='text-md'>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
