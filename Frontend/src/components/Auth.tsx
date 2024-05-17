import { useState } from "react";
import { Link } from "react-router-dom"
import { SignupInput, singupInput } from "@naveen-g09/zod-medium-types";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const postInputs = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })[0]

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="text-3xl font-extrabold">
                    Create an Account
                </div>
                <div className="text-slate-400">
                    Already have an account?
                    <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}