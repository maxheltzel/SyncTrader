"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PIN = process.env.NEXT_PUBLIC_LOGIN_PIN;

export default function Login() {
  const [pin, setPin]   = useState("");
  const [error, setErr] = useState("");
  const router          = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === PIN) {
      // ‼️  set auth cookie, expires in 1 day
      document.cookie = "auth=1; path=/; max-age=86400";
      router.push("/dashboard");
    } else {
      setErr("Incorrect PIN");
      setPin("");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-center rounded-2xl border border-gray-200 bg-white p-12 shadow-lg"
      >
        {/* ------------ logo here ------------ */}
        <div className="mb-6 flex justify-center">
          <Image src="/SyncTrader Mocks.png" alt="SyncTrader logo" width={500} height={100} priority />
        </div>

        <label className="mb-2 block font-medium text-gray-700">Enter PIN</label>
        <input
          type="password"
          inputMode="numeric"
          maxLength={8}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="mb-4 w-48 rounded-md border px-3 py-2 text-center tracking-widest"
        />

        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-[#18cb96] px-6 py-3 text-white hover:bg-[#159b85]"
        >
          Log&nbsp;In
        </button>
      </form>
    </main>
  );
}
