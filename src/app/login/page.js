import Image from 'next/image';
import Link from 'next/link';

import GoogleButton from '../__components__/GoogleButton';

async function LoginPage() {
    return (
        <>
            <div className="w-full h-full bg-gradient-to-tr from-primary to-[#36C770] flex justify-center items-center p-20">
                <div className="w-5/12 h-full py-12 bg-white shadow-2xl rounded-xl drop-shadow-xl">
                    <div className="flex justify-center pt-4">
                        <Image
                            src="/assets/image/logo.svg"
                            width="250"
                            height="250"
                            alt="Logo"
                            priority
                            className="w-auto h-auto hidden md:block"
                        />
                    </div>

                    <div className="flex justify-center pt-4">
                        <p className="text-lg font-semibold text-secondary">SELAMAT DATANG KEMBALI</p>
                    </div>

                    <div className="flex justify-center px-8 pt-4">
                        <input
                            className="w-full h-12 px-4 py-2 mt-4 border bg-[#E7E6E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Masukkan email"
                            type="email"
                        />
                    </div>

                    <div className="flex justify-center px-8 pt-2">
                        <input
                            className="w-full h-12 px-4 py-2 mt-4 border bg-[#E7E6E6] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Masukkan password"
                            type="password"
                        />
                    </div>

                    <div className="flex justify-center px-8">
                        <hr className="border-[1px] border-[#808080] mt-6 w-2/5" />
                        <p className="text-[14px] tracking-wider text-[#808080] mt-3 ml-4">atau</p>
                        <hr className="border-[1px] border-[#808080] mt-6 w-2/5 ml-4" />
                    </div>

                    <GoogleButton />

                    <div className="flex justify-between px-8 pt-4">
                        <div className="flex items-center content-center">
                            <input
                                id="terms"
                                type="checkbox"
                                className="w-[15px] h-[15px]"
                            ></input>
                            <label
                                htmlFor="terms"
                                className="ml-2 text-sm "
                            >
                                Ingat saya
                            </label>
                        </div>
                        <div>
                            <Link
                                href="/forgotpass"
                                className="text-sm hover:text-primary"
                            >
                                Lupa Kata Sandi?
                            </Link>
                        </div>
                    </div>

                    <p className="px-8 pt-1 text-sm">
                        Belum punya akun?{' '}
                        <Link
                            href="/register"
                            className="text-primary hover:text-secondary"
                        >
                            Daftar
                        </Link>
                    </p>

                    <div className="flex justify-center px-8 pt-8">
                        <button className="w-full h-12 text-lg font-semibold text-white bg-secondary rounded-xl">MASUK</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
