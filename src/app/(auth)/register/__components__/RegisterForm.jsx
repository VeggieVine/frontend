"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useInput } from "@/src/hooks/useInput";

import TextInput from "@/src/app/__components__/form/TextInput";
import SubmitButton from "@/src/app/__components__/ui/SubmitButton";

import {
    UserSVG,
    PasswordSVG,
    EmailSVG,
} from "@/src/app/__components__/ui/Icons";

function RegisterForm({ handleRegister }) {
    const router = useRouter();
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

    useEffect(() => {
        console.error(errors);
    }, [router.reset, errors]);

    return (
        <form
            className="flex flex-col space-y-4 px-6 pb-6 lg:px-8 lg:pb-8 bg-none"
            onSubmit={(event) =>
                handleRegister(event, { name, email, password, setErrors })
            }
        >
            {/* NAME */}
            <div>
                <TextInput
                    id="name"
                    type="text"
                    placeholder="Masukkan nama"
                    value={name}
                    onChange={setName}
                >
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <UserSVG className="size-4 stroke-current" />
                    </span>
                </TextInput>
            </div>

            {/* EMAIL */}
            <div>
                <TextInput
                    id="email"
                    type="email"
                    placeholder="Masukkan email"
                    value={email}
                    onChange={setEmail}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi"
                    value={password}
                    onChange={setPassword}
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

            {/* SUBMIT BUTTON */}
            <SubmitButton id="register-button">Daftar</SubmitButton>

            {/* LOGIN LINK */}
            <p className="self-center lg:self-start text-sm text-neutral">
                <span>Sudah punya akun? </span>
                <Link href="/login">
                    <span className="underline text-primary">Masuk</span>
                </Link>
            </p>
        </form>
    );
}

export default RegisterForm;
