"use client";
import React, { useState, useEffect } from 'react';
import {StaticImageData} from "next/image";
type CartType = {
    [key: string]: number,
}
export default function AddToCartButton({productId}:{productId:string}) {
    const [shoppingCart, setShoppingCart] = useState<CartType>({});

    // On page refresh, retrieve cart value from local storage
    useEffect(() => {
        const data = window.localStorage.getItem('MCD_APP_STATE');
        if ( data !== null ) setShoppingCart(JSON.parse(data));
    }, []);

    // Persist component state to local storage
    useEffect(() => {
        window.localStorage.setItem('MCD_APP_STATE', JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    // TODO This should probably be debounced in a real-world scenario
    const handleAddToCart = (e:React.MouseEvent)=> {
        const currentCart:CartType = {...shoppingCart};
        currentCart[productId] ? (currentCart[productId] += 1) : (currentCart[productId] = 1);
        setShoppingCart(shoppingCart => ({
            ...shoppingCart,
            ...currentCart
        }))
    }

    return <button
        type="button"
        onClick={handleAddToCart}
        className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-accent px-8 py-3 text-base font-medium text-zinc-800 shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-50"
    >
        Add to Cart Btn
    </button>
}