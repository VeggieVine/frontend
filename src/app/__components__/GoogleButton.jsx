'use client';

import Image from 'next/image';
import { handleGoogleLogin } from '../../../lib';

export default function GoogleButton() {
    return (
        <div className="flex justify-center pt-2">
            <button
                className="btn btn-lg btn-square"
                onClick={() => handleGoogleLogin()}
            >
                <Image
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                    width="24"
                    height="24"
                />
                {/* <span>Google</span> */}
            </button>
        </div>
    );
}
