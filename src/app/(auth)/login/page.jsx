"use client"

import { useAuth } from "@/src/hooks/useAuth"

import LoginForm from "./__components__/LoginForm"
import GoogleButton from "../../__components__/ui/GoogleButton"

function LoginPage() {
    const { login } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "to-dashboard",
    })

    const handleLogin = (
        event,
        { email, password, remember, setErrors, setStatus },
    ) => {
        event.preventDefault()

        login({
            email,
            password,
            remember,
            setErrors,
            setStatus,
        })
    }

    return (
        <div className="mx-auto max-w-lg space-y-6 rounded-btn shadow-2xl">
            <div className="flex justify-center px-6 pt-6 lg:px-8 lg:pt-8">
                <p className="text-2xl font-bold text-primary">Masuk</p>
            </div>

            <div className="flex justify-center px-6 lg:px-8">
                <GoogleButton />
            </div>

            <div className="flex justify-center items-center rounded-lg px-6 lg:px-8 gap-x-4">
                <hr className="border border-primary w-2/5" />
                <p className="text-base tracking-wider text-primary leading-none">
                    atau
                </p>
                <hr className="border border-primary w-2/5" />
            </div>

            <LoginForm handleLogin={handleLogin} />
        </div>
    )
}

export default LoginPage
