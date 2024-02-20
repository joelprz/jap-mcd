"use client";
import React, { useState, useEffect } from 'react';
import {CartType} from "@/app/components/addToCartBtn";
export default function CartTotalIndicator() {
    const [shoppingCart, setShoppingCart] = useState<CartType>({});
    const cartKeys = Object.keys(shoppingCart);
    let totalCartItems = 0;

    const updateLocalStorage = () => {
        const data = window.localStorage.getItem('MCD_APP_STATE');
        if ( data !== null ) setShoppingCart(JSON.parse(data));
    }

    cartKeys.forEach(key => totalCartItems += shoppingCart[key]);

    useEffect(() => {
        updateLocalStorage();
    }, []);

    useEffect(() => {
        const listenStorageChange = () => {
            updateLocalStorage();
        };

        window.addEventListener("CartUpdated", listenStorageChange);
        return () => window.removeEventListener("CartUpdated", listenStorageChange);
    }, []);

    return <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">{totalCartItems}</div>

}