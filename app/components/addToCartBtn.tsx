"use client";
import React, {useState, useEffect, Fragment} from 'react';
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from '@headlessui/react'

export type CartType = {
    [key: string]: number,
}
export default function AddToCartButton({productId, productName}:{productId:string, productName:string}) {
    const [shoppingCart, setShoppingCart] = useState<CartType>({});
    const [isFragOpen, setIsFragOpen] = useState(false);

    // On page refresh, retrieve cart value from local storage
    useEffect(() => {
        const data = window.localStorage.getItem('MCD_APP_STATE');
        if ( data !== null ) setShoppingCart(JSON.parse(data));
    }, []);

    // Persist component state to local storage
    useEffect(() => {
        window.localStorage.setItem('MCD_APP_STATE', JSON.stringify(shoppingCart));
        window.dispatchEvent(new Event("CartUpdated"));
    }, [shoppingCart]);

    const handleAddToCart = (e:React.MouseEvent)=> {
        const currentCart:CartType = {...shoppingCart};
        currentCart[productId] ? (currentCart[productId] += 1) : (currentCart[productId] = 1);
        setShoppingCart(shoppingCart => ({
            ...shoppingCart,
            ...currentCart
        }))
        setIsFragOpen(true);
    }

    return <>
        <Transition
            show={isFragOpen}
            as={Fragment}
            enter="transform ease-out duration-600 transition"
            enterFrom="translate-y-4 opacity-0 sm:translate-y-0 sm:translate-x-8"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="absolute -mt-5 ml-[-9px!important] z-50 pointer-events-auto w-full max-w-lg overflow-hidden border border-accent rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <CheckCircleIcon className="h-6 w-6 text-accent" aria-hidden="true" />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900">{productName} added to your cart!</p>
                        </div>
                        <div className="ml-4 flex flex-shrink-0">
                            <button
                                type="button"
                                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                                onClick={() => {
                                    setIsFragOpen(false)
                                }}
                            >
                                <span className="sr-only">Close</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>

        <button
        type="button"
        onClick={handleAddToCart}
        className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-accent px-8 py-3 text-base font-medium text-zinc-800 shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50"
    >
        Add to Cart
    </button></>
}