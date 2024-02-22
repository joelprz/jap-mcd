import React from 'react';
import Link from "next/link";

import {fetchProducts} from "@/app/lib/database";
import CartProducts from "@/app/components/cartProducts";
import CartProductsTotal from "@/app/components/cartProductsTotal";

export default async function Cart() {
    const products = await fetchProducts();

    return (
    <div className="bg-white dark:bg-darkMcBlack mb-[165px] sm:mb-[65px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">Order Cart</h1>
            <form className="mt-12">
                <div>
                    <h2 className="sr-only">Items in your cart</h2>
                    <CartProducts products={products}/>
                </div>
                <div className="mt-10 sm:ml-32 sm:pl-6">
                    <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                        <h2 className="sr-only">Order summary</h2>
                        <div className="flow-root">
                            <dl className="-my-4 divide-y divide-gray-200 text-sm">
                                <div className="flex items-center justify-between py-4">
                                    <dt className="text-base font-medium text-gray-900 dark:text-gray-900">Order total</dt>
                                    <CartProductsTotal products={products}/>
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
                            <Link href={"/"} className="font-medium text-gray-900 hover:text-accent dark:text-gray-200">
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
