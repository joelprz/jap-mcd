import React from 'react';
import Link from "next/link";

export default async function Cart() {

    return (
        <div className="bg-white dark:bg-darkMcBlack mb-[165px] sm:mb-[65px]">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">Order Cart</h1>
                <form className="mt-12">
                    <div>
                        <h2 className="sr-only">Items in your cart</h2>
                        <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                            <li className="flex py-6 sm:py-10">
                                <div className="flex-shrink-0 relative">
                                    <div className="bg-gray-300 drop-shadow-burger h-24 w-24 rounded-lg "></div>
                                </div>
                                <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div>
                                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                                            <div className="pr-6">
                                                <h3 className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-200">Burger loading...</h3>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">Burger description...</p>
                                            </div>
                                            <p className="text-right text-sm font-medium text-gray-900 dark:text-gray-200">$0.00</p>
                                        </div>
                                        <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                                            <label htmlFor="burgerInput" className="sr-only">
                                                Quantity, Burger
                                            </label>
                                            <input
                                                id="burgerInput"
                                                type="number"
                                                name="product"
                                                className="block w-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                                                placeholder=""
                                                min={1}
                                            />
                                            <button
                                                type="button"
                                                className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                                            >
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 sm:ml-32 sm:pl-6">
                        <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                            <h2 className="sr-only">Order summary</h2>
                            <div className="flow-root">
                                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                                    <div className="flex items-center justify-between py-4">
                                        <dt className="text-base font-medium text-gray-900 dark:text-gray-900">Order total</dt>
                                        <dd className="text-base font-medium text-gray-900">$0.00</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="button"
                                className="w-full rounded-md border border-transparent bg-accent px-4 py-3 text-base font-medium text-zinc-800 shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Checkout
                            </button>
                        </div>
                        <div className="mt-6 text-center text-sm text-gray-500">
                            <p>
                                or{' '}
                                <Link href={"#"} className="font-medium text-gray-900 hover:text-accent dark:text-gray-200">
                                    Continue Ordering<span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    );
}
