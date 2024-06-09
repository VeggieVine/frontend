'use client';

import Image from 'next/image';

import { signIn } from 'next-auth/react';

export default function GoogleButton() {
    return (
        <button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className="btn btn-lg btn-square bg-base-100"
        >
            <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
                width="24"
                height="24"
            />
        </button>
    );
}
