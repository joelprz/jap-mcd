import Image from "next/image";
import Link from "next/link";
import {auth} from "@/auth";
import CartLink from "./cartLink";
import arches from "../../public/arches-logo.svg";
import LogoutButton from "./logoutBtn";

export default async function Navigation() {
  const session = await auth();

  return (
    <div className="border-b border-b-gray-200 dark:border-b-accent bg-white dark:bg-black fixed w-[100vw] h-[64px] z-[9999]">
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
              {session && session.user &&
                  <>
                    <CartLink path="/order/cart" />
                    <LogoutButton />
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
