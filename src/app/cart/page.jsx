'use client';

import { useRouter } from 'next/navigation'; 
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from '../__components__/Footer';
import Navbar from '../__components__/navbar';
import { auth } from '../../../auth';

const initialCartItems = [
  { id: 1, name: 'Apel Fuji china', imageSrc: '/assets/image/apel.png', price: 40000 },
  { id: 2, name: 'Bawang Bombai', imageSrc: '/assets/image/bawang bombai.jpg', price: 35000 },
  { id: 3, name: 'Apel Premium Pohon', imageSrc: '/assets/image/apel pohon.jpg', price: '62.000' },
  { id: 4, name: 'Blueberry China', imageSrc: '/assets/image/blueberry.jpg', price: '53.000' },
  { id: 5, name: 'Jeruk sunkist Valencia', imageSrc: '/assets/image/jeruk sunkist.jpg', price: '32.000' },
  { id: 6, name: 'Jeruk Lemon', imageSrc: '/assets/image/jeruk lemon.jpg', price: '28.000' },
  { id: 7, name: 'Jeruk Malang', imageSrc: '/assets/image/jeruk malang.jpg', price: '30.000' },
  { id: 8, name: 'Pear Century China', imageSrc: '/assets/image/pear.jpg', price: '25.000' },
  { id: 9, name: 'Kelengkeng Thailand', imageSrc: '/assets/image/kelengkeng.jpg', price: '34.000' },
  { id: 10, name: 'Kiwi', imageSrc: '/assets/image/kiwi.jpg', price: '69.000' },
  { id: 11, name: 'Belimbing', imageSrc: '/assets/image/belimbing.jpg', price: '29.000' },
  { id: 12, name: 'Semangka', imageSrc: '/assets/image/semangka.jpg', price: '90.000' },
  { id: 13, name: 'Pepaya', imageSrc: '/assets/image/pepaya.jpg', price: '30.000' },
  { id: 14, name: 'Bawang Bombai', imageSrc: '/assets/image/bawang bombai.jpg', price: '35.000' },
  { id: 15, name: 'Bawang Putih', imageSrc: '/assets/image/bawang putih.jpg', price: '37.000' },
  { id: 16, name: 'Bawang Merah', imageSrc: '/assets/image/bawang merah.jpg', price: '25.000' },
  { id: 17, name: 'Jamur', imageSrc: '/assets/image/jamur.jpg', price: '42.000' },
  { id: 18, name: 'Brokoli', imageSrc: '/assets/image/brokoli.jpg', price: '39.000' },
  { id: 19, name: 'Wortel', imageSrc: '/assets/image/wortel.jpg', price: '17.000' },
  { id: 20, name: 'Tomat', imageSrc: '/assets/image/tomat.jpg', price: '25.000' },
  { id: 21, name: 'Mentimun', imageSrc: '/assets/image/timun.png', price: '15.000' },
  { id: 22, name: 'Kentang', imageSrc: '/assets/image/kentang.jpeg', price: '20.000' },
  { id: 23, name: 'Oyong', imageSrc: '/assets/image/oyong.jpeg', price: '21.000' },
  { id: 24, name: 'Kol', imageSrc: '/assets/image/kol.jpeg', price: '8.000' },
  { id: 25, name: 'Kol Unggu', imageSrc: '/assets/image/kol unggu.jpeg', price: '49.000' },
];

export default function CartPage() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState(
    initialCartItems.map(item => ({ ...item, quantity: 1 }))
  );
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const { user } = await auth() || {};
      setUser(user);
    }

    fetchUser();
  }, []);

  useEffect(() => {
    console.log("Data ID produk:", items.map(item => item.id));
    console.log("items", items);
  }, [items]);

  const total = items.reduce((sum, product) => {
    const price = typeof product.price === 'string'
      ? parseInt(product.price.replace(/\./g, ''), 10)
      : product.price;
    return sum + (price * product.quantity);
  }, 0);

  const handleIncreaseQuantity = (itemId) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (itemId) => {
    setItems(items.reduce((acc, item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          acc.push({ ...item, quantity: newQuantity });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []));
  };

  const handleCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    router.push('/checkout');
  };

  return (
    <div className='w-full'>
      <Navbar user={user} />
      <div className='flex justify-center my-10'>
        <div className='w-full max-w-6xl'>
          <h1 className='text-3xl font-bold mb-8 text-center'>Keranjang Belanja</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <div className='border p-4 bg-white shadow-md rounded-md'>
                <h2 className='text-2xl font-semibold mb-4'>Daftar Produk</h2>
                {items.length === 0 ? (
                  <div className='text-center text-lg text-gray-600'>Keranjang Anda kosong.</div>
                ) : (
                  items.map(item => (
                    <div key={item.id} className='border-b py-4 flex items-center justify-between'>
                      <div className='flex items-center space-x-4'>
                        <div className='w-20 h-20 relative'>
                          <Image
                            src={item.imageSrc}
                            alt={item.name}
                            layout='fill'
                            objectFit='cover'
                            className='rounded-md'
                          />
                        </div>
                        <div>
                          <h2 className='text-lg font-semibold'>{item.name}</h2>
                          <p className='text-md text-gray-500'>Rp {item.price}</p>
                        </div>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                        >
                          -
                        </button>
                        <span className='px-3'>{item.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className='px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600'
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className='col-span-1'>
              <div className='border p-4 bg-white shadow-md rounded-md'>
                <h2 className='text-2xl font-semibold mb-4'>Ringkasan Belanja</h2>
                <div className='flex justify-between mb-4'>
                  <span className='text-lg'>Total:</span>
                  <span className='text-lg font-semibold'>Rp {total}</span>
                </div>
                {items.length > 0 ? (
                  <button
                    onClick={handleCheckout}
                    className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-300'
                  >
                    Checkout
                  </button>
                ) : (
                  <button
                    disabled
                    className='w-full bg-gray-400 text-white py-2 rounded-md cursor-not-allowed'
                  >
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
