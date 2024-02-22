import {MusicalNoteIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <main className="grid min-h-full place-items-center bg-white dark:bg-darkMcBlack px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <div className="flex items-end">
                    <MusicalNoteIcon
                        className="h-12 w-12 text-zinc-800 mr-5 dark:text-gray-200"
                        aria-hidden="true"/>
                    <h1 className="dark:text-gray-200 mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">I&apos;m......<em>not</em> lovin&apos; it.</h1>
                    <MusicalNoteIcon
                        className="h-12 w-12 text-zinc-800 ml-5 dark:text-gray-200"
                        aria-hidden="true"/>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">We&apos;re unable to find the page you&apos;re looking for.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href={"/"}
                        className="rounded-md bg-accent px-3.5 py-2.5 text-zinc-800 shadow-sm hover:brightness-95 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Go to Ordering home
                    </Link>
                    <Link href="#" className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}