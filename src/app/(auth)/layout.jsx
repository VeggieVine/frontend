import Image from 'next/image';

export default function AuthLayout({ children }) {
    return (
        <div className="flex items-center max-w-screen-xl min-h-screen mx-auto ">
            <div className="mx-auto max-w-screen-xl w-full px-4 py-16 sm:px-6 lg:px-8">
                <Image
                    src="/assets/image/logo.svg"
                    width="165"
                    height="165"
                    alt="Logo"
                    priority
                    className="hidden md:block absolute top-10 left-10 right-0 "
                />
                {children}
            </div>
        </div>
    );
}
