'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
    <div className="">
        {currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')}
          className="text-xl cursor-pointer hover:text-amber-500 duration-700 ease-in-out" /> :
          <MdDarkMode onClick={()=>setTheme('dark')}
            className="text-xl cursor-pointer hover:text-amber-500 duration-700 ease-in-out" />}
    </div>
  )
}
