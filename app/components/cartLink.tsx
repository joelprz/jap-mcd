import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import CartTotalIndicator from "@/app/components/cartTotalIndicator";
export default function CartLink({ path = "/" }: { path?: string }) {
  return (
    <Link
      href={path}
      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-accent px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <ShoppingCartIcon
        className="-ml-0.5 h-5 w-5 text-zinc-800"
        aria-hidden="true"
      />
      View Cart
      <CartTotalIndicator/>
    </Link>
  );
}
