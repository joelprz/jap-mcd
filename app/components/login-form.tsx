"use client";
import {useFormState} from "react-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

import {LoginButton} from "@/app/components/loginBtn";
import {authenticate} from "@/app/lib/authenticate";

export default function LoginForm() {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

    return (<form action={dispatch} className="space-y-6">
        <div>
            <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Email
            </label>
            <div className="mt-2">
                <input
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ronald@mcd.com"
                    required
                />
            </div>
        </div>
        <div>
            <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Password
            </label>
            <div className="mt-2 relative">
                <input
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="happymeal"
                    required
                    minLength={6}
                />
            </div>
        </div>
        <LoginButton/>
        <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
        >
            {errorMessage && (<>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500"/>
                <p className="text-sm text-red-500">{errorMessage}</p>
            </>)}
        </div>
    </form>);
}
