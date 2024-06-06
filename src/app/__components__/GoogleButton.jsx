'use client';

import Image from 'next/image';
import { handleGoogleLogin } from '../../../lib';

export default function GoogleButton() {
    return (
        <button
            className="btn btn-lg btn-square bg-base-100"
            onClick={() => handleGoogleLogin()}
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
