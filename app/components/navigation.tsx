import Image from "next/image";
import Link from "next/link";

import CartLink from "./cartLink";
import arches from "../../public/arches-logo.svg";
import LogoutButton from "./logoutBtn";

export default function Navigation() {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link href={"/"}>
                  <Image
                    alt="logo"
                    loading="lazy"
                    width="153"
                    height="122"
                    className="block h-12 w-12"
                    src={arches}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0 flex space-x-2">
              <CartLink path="/order/cart" />
              {/*TODO Hide logout button when user is not authenticated*/}
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
