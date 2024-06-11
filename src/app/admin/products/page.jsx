import { auth } from '@/auth';
import Sidebar from '../../__components__/Sidebar';
import Table from './__components__/Table';

export default async function AdminProductsPage() {
  const { user } = (await auth()) || {};

  const data = [
    { id: 1, itemName: 'Barang 1', description: 'Deskripsi 1', category: 'Kategori 1', price: 10000, stock: 10, image: '/assets/image/apel.png' },
    { id: 2, itemName: 'Barang 2', description: 'Deskripsi 2', category: 'Kategori 2', price: 20000, stock: 20, image: '/assets/image/pokcoy.png' },
    { id: 3, itemName: 'Barang 3', description: 'Deskripsi 3', category: 'Kategori 3', price: 30000, stock: 30, image: '/assets/image/mangga.png' },
    { id: 4, itemName: 'Barang 4', description: 'Deskripsi 4', category: 'Kategori 4', price: 40000, stock: 40, image: '/assets/image/kiwi.png' },
    { id: 5, itemName: 'Barang 5', description: 'Deskripsi 5', category: 'Kategori 5', price: 50000, stock: 50, image: '/assets/image/apel.png' },
    { id: 6, itemName: 'Barang 6', description: 'Deskripsi 6', category: 'Kategori 6', price: 60000, stock: 60, image: '/assets/image/apel.png' },
    { id: 7, itemName: 'Barang 7', description: 'Deskripsi 7', category: 'Kategori 7', price: 70000, stock: 70, image: '/assets/image/apel.png' },
    { id: 8, itemName: 'Barang 8', description: 'Deskripsi 8', category: 'Kategori 8', price: 80000, stock: 80, image: '/assets/image/apel.png' },
    { id: 9, itemName: 'Barang 9', description: 'Deskripsi 9', category: 'Kategori 9', price: 90000, stock: 90, image: '/assets/image/apel.png' },
    { id: 10, itemName: 'Barang 10', description: 'Deskripsi 10', category: 'Kategori 10', price: 100000, stock: 100, image: '/assets/image/apel.png' },
  ];

  return (
    <>
      <Sidebar user={user} />
      <div className='ml-44 pt-20 pb-12 px-8 lg:ml-64'>
        <h1 className='text-xl font-bold text-black pb-4'>Data Produk</h1>
        <button className='btn btn-outline btn-primary mb-4'>Tambah barang</button>
        <div className='max-h-[100vh] overflow-hidden'>
          <Table data={data} />
        </div>
      </div>
    </>
  );
}
