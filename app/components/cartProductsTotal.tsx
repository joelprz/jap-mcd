"use client";
import {Product} from "@/app/lib/definitions";
import useLocalCartData from "@/app/hooks/useLocalCartData";
import {formatCurrency} from "@/app/lib/utils";
import React from "react";
export default function CartProductsTotal({products}:{products:Product[]}) {
    const shoppingCart= useLocalCartData();
    const cartKeys = Object.keys(shoppingCart);
    let cartTotal = 0;

    cartKeys.forEach(cartKey=> {
        const multiplier = shoppingCart[cartKey];
        const price = products.find(product => product.id === cartKey)?.price || 0;
        cartTotal += (multiplier * price);
    })

    return (
        <dd className="text-base font-medium text-gray-900">{formatCurrency(cartTotal)}</dd>
    )
}