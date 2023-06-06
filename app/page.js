"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <main className="">
      <div className="h-screen w-screen bg-slate-500 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold">
          Elangovan clicked this button {count}
        </h1>
        <button
          className="bg-black text-white px-10 py-2 rounded-xl mt-4 text-2xl font-medium active:bg-white active:text-black"
          onClick={handleCount}
        >
          Save
        </button>
      </div>
    </main>
  );
}
