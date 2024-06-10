import { auth } from '@/auth';
import Sidebar from '../../__components__/Sidebar';
import Table from './__components__/Table';

export default async function AdminInvoicesPage() {
  const { user } = (await auth()) || {};

  const data = [
    { orderId: 1, username: 'Joko Saputra', date: '2024-02-06', totalPayment: 255000, status: 'Terbayar' },
    { orderId: 2, username: 'Jono Sapardi', date: '2024-06-10', totalPayment: 500000, status: 'Belum Terbayar' },
    { orderId: 3, username: 'Joni Saputro', date: '2024-07-12', totalPayment: 1000000, status: 'Terbayar' },
    { orderId: 4, username: 'Joko Saputra', date: '2024-07-12', totalPayment: 1000000, status: 'Terbayar' },
    { orderId: 5, username: 'Jono Sapardi', date: '2024-07-12', totalPayment: 1000000, status: 'Terbayar' },
  ]

  return (
    <>
      <Sidebar user={user} />
      <div className='ml-44 pt-20 pb-12 px-8 lg:ml-64'>
        <h1 className='text-xl font-bold text-black pb-4'>Data Pembayaran</h1>
        <div className='max-h-[100vh] overflow-hidden'>
          <Table data={data} />
        </div>
      </div>
    </>
  )
}