'use client';

import { useState } from 'react';
import Link from 'next/link';

import { useInput } from '@/src/hooks/useInput';

import TextInput from '@/src/app/__components__/form/TextInput';
import SubmitButton from '@/src/app/__components__/ui/SubmitButton';

import { PasswordSVG, EmailSVG } from '@/src/app/__components__/ui/Icons';

function LoginForm({ handleLogin }) {
    const [showPassword, setShowPassword] = useState(false);

    const [email, handleEmail] = useInput('');
    const [password, handlePassword] = useInput('');

    return (
        <form
            aria-label="form"
            className="flex flex-col mb-0 space-y-4 rounded-lg px-6 pb-6 lg:px-8 lg:pb-8"
            onSubmit={(event) => handleLogin(event, { email, password })}
        >
            {/* EMAIL */}
            <div>
                <TextInput
                    id="email"
                    type="email"
                    placeholder="Masukkan email"
                    value={email}
                    onChange={handleEmail}
                    required
                >
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <EmailSVG className="size-4 stroke-current" />
                    </span>
                </TextInput>
            </div>

            {/* PASSWORD */}
            <div>
                <TextInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={handlePassword}
                    required
                >
                    <button
                        type="button"
                        className="absolute inset-y-0 end-0 grid place-content-center px-4"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <span className="sr-only">Show Or Hide Password</span>
                        <PasswordSVG className="size-4 hover:cursor-pointer stroke-current" />
                    </button>
                </TextInput>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer justify-start gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                    />
                    <span className="label-text">Ingat saya</span>
                </label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex items-center justify-end">
                <SubmitButton id="login-button">Masuk</SubmitButton>
            </div>

            {/* REGISTER LINK */}
            <p className="self-center lg:self-start text-sm text-neutral">
                <span>Belum punya akun? </span>
                <Link href="/register">
                    <span className="underline text-primary">Daftar sekarang</span>
                </Link>
            </p>
        </form>
    );
}

export default LoginForm;
