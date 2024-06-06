import NavbarItem from "./NavbarItem"

export default function Navbar() {
    return (
    <div className="bg-slate-800 text-[#F4F3F2] dark:bg-amber-500 dark:text-slate-800 w-full">
        <div className="max-w-6xl p-4 lg:text-lg flex items-center gap-2 mx-auto">
            <NavbarItem title="Trending" param="fetchTrending" />
            <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
     </div>
  )
}
