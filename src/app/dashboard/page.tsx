import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image src="/SyncTrader Mocks.png" alt="SyncTrader logo" width={250} height={50} priority />
    </main>
  );
}
