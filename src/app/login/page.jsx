import Image from 'next/image';

import LoginForm from './__components__/LoginForm';
import GoogleButton from '../__components__/GoogleButton';

async function LoginPage() {
    return (
        <>
            <Image
                src="/assets/image/logo.svg"
                width="180"
                height="180"
                alt="Logo"
                priority
                className="hidden md:block absolute top-10 left-10"
            />
            <div className="flex items-center max-w-screen-xl min-h-screen mx-auto">
                <div className="mx-auto max-w-screen-xl w-full px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg space-y-6 rounded-lg">
                        <div className="flex justify-center pt-4">
                            <p className="text-2xl font-bold text-primary">Masuk</p>
                        </div>

                        <GoogleButton />

                        <div className="flex justify-center items-center rounded-lg px-6 lg:px-8 gap-x-4">
                            <hr className="border border-primary w-2/5" />
                            <p className="text-base tracking-wider text-primary leading-none">atau</p>
                            <hr className="border border-primary w-2/5" />
                        </div>

                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
