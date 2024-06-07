"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const userSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center max-w-6xl mx-auto my-4 gap-2">
        <input
          type="text"
          placeholder="Search keywords..."
          className="max-w-[50%] h-10 rounded-md indent-2
          placeholder-gray-500 outline-none bg-transparent flex-1 border border-slate-800 dark:border-amber-500"
          value={search}
          onChange={userSearch}
        />
        <button
          className="bg-slate-800 dark:bg-amber-500 text-[#F4F3F2] disabled:bg-gray-500 py-2 px-4 rounded-2xl"
          disabled={search === ""}
        >
          Search
        </button>
      </div>
    </form>
  );
}
