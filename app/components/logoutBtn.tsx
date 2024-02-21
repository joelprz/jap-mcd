"use client";

import { signout } from "@/app/lib/signout";
import { useFormState } from "react-dom";

export default function LogoutButton() {
  const [errorMessage, dispatch] = useFormState(signout, undefined);
  const handleDispatch = () => {
      window.localStorage.removeItem('MCD_APP_STATE');
      dispatch();
  }

  return (
    <form action={handleDispatch}>
      <button className="relative inline-flex items-center gap-x-1.5 rounded-md bg-white border border-gray-200 px-3 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
        <div className="block">Sign Out</div>
      </button>
    </form>
  );
}
