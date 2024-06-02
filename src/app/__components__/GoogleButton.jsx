'use client';

import Image from 'next/image';
import { handleGoogleLogin } from '../../../lib';

export default function GoogleButton() {
    return (
        <div className="flex justify-center pt-2">
            <button
                className="text-[14px] font-medium px-4 py-2 border flex gap-2 border-slate-300 shadow-xl rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                onClick={() => handleGoogleLogin()}
            >
                <Image
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                    width="24"
                    height="24"
                />
                <span>Masuk menggunakan Google</span>
            </button>
        </div>
    );
}
