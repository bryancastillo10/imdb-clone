'use client';
import { ReactNode } from "react";

interface ProviderProps{
    children: ReactNode;
}

import { ThemeProvider } from "next-themes";
export default function Provider({children}:ProviderProps) {
  return (
      <ThemeProvider defaultTheme="system" attribute="class">
      <div className="bg-[#F4F3F2] text-slate-800 dark:text-amber-500 dark:bg-slate-800
          min-h-screen select-none transition-colors duration-500 ease-in-out
          ">
              {children}
          </div>
</ThemeProvider>
  )
};
