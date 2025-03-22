import type { ReactNode } from "react";
import { Navbar, BellIcon, MessageSquareIcon } from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[#d9e0e7] px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Migrafy</h1>
        <div className="flex items-center gap-4">
          <button className="text-[#6a6a6a] hover:text-[#2273ce]">
            <BellIcon />
          </button>
          <button className="text-[#6a6a6a] hover:text-[#2273ce]">
            <MessageSquareIcon />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#d9d9d9]"></div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
