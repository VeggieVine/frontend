"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { useInput } from "@/src/hooks/useInput"

import AuthSessionStatus from "../../AuthSessionStatus"
import TextInput from "@/src/app/__components__/form/TextInput"
import InputError from "@/src/app/__components__/form/InputError"
import SubmitButton from "@/src/app/__components__/ui/SubmitButton"
import { PasswordSVG, EmailSVG } from "@/src/app/__components__/ui/Icons"

function LoginForm({ handleLogin }) {
    const router = useRouter()

    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [shouldRemember, setShouldRemember] = useState(false)

    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    }, [router.reset, errors])

    return (
        <form
            aria-label="form"
            className="flex flex-col space-y-4 px-6 pb-6 lg:px-8 lg:pb-8 bg-none"
            onSubmit={(event) =>
                handleLogin(event, {
                    email,
                    password,
                    shouldRemember,
                    setErrors,
                    setStatus,
                })
            }
        >
            <AuthSessionStatus className="mb-4" status={status} />
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

                <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* PASSWORD */}
            <div>
                <TextInput
                    id="password"
                    type={showPassword ? "text" : "password"}
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

                <InputError messages={errors.password} className="mt-2" />
            </div>

            <div className="form-control">
                <label className="label cursor-pointer justify-start gap-x-2">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                        onChange={(event) =>
                            setShouldRemember(event.target.checked)
                        }
                    />
                    <span className="label-text">Ingat saya</span>
                </label>
            </div>

            {/* SUBMIT BUTTON */}
            <SubmitButton id="login-button">Masuk</SubmitButton>

            {/* REGISTER LINK */}
            <p className="self-center lg:self-start text-sm text-neutral">
                <span>Belum punya akun? </span>
                <Link href="/register">
                    <span className="underline text-primary">
                        Daftar sekarang
                    </span>
                </Link>
            </p>
        </form>
    )
}

export default LoginForm
