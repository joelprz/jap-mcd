"use client";
import React from 'react';

import Header from "@/app/components/pageHeader";
import useLocalCartData from "@/app/hooks/useLocalCartData";

export default function Cart() {
  const shoppingCart= useLocalCartData();
  const cartKeys = Object.keys(shoppingCart);
  let totalCartItems = 0;

  cartKeys.forEach(key => totalCartItems += shoppingCart[key]);
  return <div><Header headerText="Order Cart" />
  <h3>Cart contents: {totalCartItems}</h3>
  </div>;
}
