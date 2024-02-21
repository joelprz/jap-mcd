import LoginForm from "./components/login-form";
import Image from "next/image";
import BlackBurger from "@/public/products/black-burger.jpeg"

export default function Index() {
  return (
    <div className="flex min-h-full flex-1 bg-white rounded-lg overflow-hidden border border-solid border-gray-200">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 pb-28">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Please sign in to your McDonald&apos;s account to place your order.
            </h2>
          </div>
          <div className="mt-10">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={BlackBurger}
          aria-hidden={true}
          alt=""
          priority={true}
        />
      </div>
    </div>
  );
}
