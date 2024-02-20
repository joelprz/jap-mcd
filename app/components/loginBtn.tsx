import {useFormStatus} from "react-dom";

export function LoginButton() {
    const {pending} = useFormStatus();

    return (<button
            className="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            aria-disabled={pending}>
            Sign In
        </button>);
}