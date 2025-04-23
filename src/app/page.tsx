export default function Dashboard() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-2xl border border-gray-200 bg-white p-12 shadow-lg">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">SyncTrader</h1>

        {/* TODO: connect real auth later */}
        <button
          className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700 focus:outline-none"
        >
          Log In
        </button>
      </div>
    </main>
  );
}
