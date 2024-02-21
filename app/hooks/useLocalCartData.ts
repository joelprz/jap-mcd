"use client";
import { useState, useEffect } from 'react';
import {CartType} from "@/app/components/addToCartBtn";

export default function useLocalCartData() {
    const [shoppingCart, setShoppingCart] = useState<CartType>({});

    const updateLocalStorage = () => {
        const data = window.localStorage.getItem('MCD_APP_STATE');
        if ( data !== null ) setShoppingCart(JSON.parse(data));
    }

    useEffect(() => {
        updateLocalStorage();
    }, []);

    useEffect(() => {
        const listenStorageChange = () => {
            updateLocalStorage();
        };

        window.addEventListener("CartUpdated", listenStorageChange);
        //return () => window.removeEventListener("CartUpdated", listenStorageChange);
    }, []);

    return shoppingCart;
}