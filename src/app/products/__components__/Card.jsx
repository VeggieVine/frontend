import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ imageSrc, name, price, renderButtons }) => {
  return (
    <div className='w-[500px] h-full rounded-[16px] border-2 shadow-lg'>
      <Link href=''>
        <div className='flex flex-row items-center content-center justify-between px-6 py-3'>
          <p className='text-lg font-bold'>{name}</p>
          <Image
            src='/assets/image/logo.svg'
            width='150'
            height='150'
            alt='Logo'
            priority
            className='hidden md:block'
          />
        </div>
        <div>
          <Image
            src={imageSrc}
            alt={name}
            width={500}
            height={500}
            className='w-full h-full pb-2'
          />
        </div>
        <hr className='mb-2 border-gray-500 border-1' />
        <div className='px-6 pb-4'>
          <p className='text-lg font-bold text-primary'>Rp. {price}</p>
          <p className='text-base font-semibold text-primary'>1 Pack = 950 - 1.050 gram</p>
        </div>
      </Link>
      {renderButtons && renderButtons()} {/* Render buttons if provided */}
    </div>
  );
};

export default ProductCard;
