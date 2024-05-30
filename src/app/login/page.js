import Image from 'next/image';
import Link from 'next/link';

function LoginPage() {
  return (
    <>
      <div className='w-full h-full bg-gradient-to-tr from-primary to-[#36C770] flex justify-center items-center p-20'>
        <div className='w-2/6 bg-white h-[570px] rounded-xl shadow-2xl drop-shadow-xl py-12'>
          <div className='flex justify-center pt-4'>
            <Image
              src='/assets/image/logo.svg'
              width='250'
              height='250'
              alt='Logo'
            />
          </div>

          <div className='flex justify-center pt-4'>
            <p className='text-lg font-semibold text-secondary'>
              SELAMAT DATANG KEMBALI
            </p>
          </div>

          <div className='flex justify-center px-8 pt-4'>
            <input
              className='w-full h-12 px-4 py-2 mt-4 border bg-[#E7E6E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Masukkan email...'
              type='email'
            />
          </div>

          <div className='flex justify-center px-8 pt-2'>
            <input
              className='w-full h-12 px-4 py-2 mt-4 border bg-[#E7E6E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Masukkan password...'
              type='password'
            />
          </div>

          <div className='inline-flex justify-center px-8'>
            <hr className='border-[1px] border-[#808080] mt-6 w-[134px]' />
            <p className='text-[14px] tracking-wider text-[#808080] mt-3 ml-4'>
              atau
            </p>
            <hr className='border-[1px] border-[#808080] mt-6 w-[136px] ml-4' />
          </div>

          <div className='flex justify-center pt-2'>
            <button className='text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'>
              <Image
                src='https://www.svgrepo.com/show/475656/google-color.svg'
                loading='lazy'
                alt='google logo'
                width='24'
                height='24'
              />
              <span>Masuk menggunakan Google</span>
            </button>
          </div>

          <div className='flex justify-between px-8 pt-4'>
            <div className='flex items-center content-center'>
              <input
                id='terms'
                type='checkbox'
                className='w-[15px] h-[15px]'
              ></input>
              <label for='terms' className='ml-2 text-sm '>
                Ingat saya
              </label>
            </div>
            <div>
              <Link href='/forgotpass' className='text-sm hover:text-primary'>
                Lupa Kata Sandi?
              </Link>
            </div>
          </div>

          <div className='flex justify-center px-8 pt-8'>
            <button className='w-full h-12 text-lg font-semibold text-white bg-secondary rounded-xl'>MASUK</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
