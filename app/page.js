"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <main className="min-h-screen w-screen">
      <div className="h-screen w-screen bg-slate-500 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">
          Elangovan clicked this button {count}
        </h1>
        <button
          className="bg-black text-slate-400 px-10 py-2 rounded-xl mt-4 text-2xl font-medium active:text-slate-200"
          onClick={handleCount}
        >
          Save
        </button>
      </div>
      <h1>vvvvv</h1>
    </main>
  );
}
