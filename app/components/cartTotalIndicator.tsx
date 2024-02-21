"use client";
import React from 'react';
import useLocalCartData from "@/app/hooks/useLocalCartData";
export default function CartTotalIndicator() {
    const shoppingCart= useLocalCartData();
    const cartKeys = Object.keys(shoppingCart);
    let totalCartItems = 0;

    cartKeys.forEach(key => totalCartItems += shoppingCart[key]);
    return <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">{totalCartItems}</div>

}