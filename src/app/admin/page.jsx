import { auth } from '@/auth';
import Sidebar from '../__components__/Sidebar';

export default async function DashboardPage() {
  const { user } = (await auth()) || {};

  return (
    <>
    <Sidebar user={user} />
    </>
  )
}