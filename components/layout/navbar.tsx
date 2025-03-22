"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  MessageSquare,
  Settings,
  HelpCircle,
  Home,
  BarChart2,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  return (
    <aside className="w-64 border-r border-[#d9e0e7] p-6 flex flex-col">
      <nav className="space-y-4 flex-1">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 py-2 ${
            isActive("/dashboard")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/language-learning"
          className={`flex items-center gap-3 py-2 ${
            isActive("/language-learning")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <BookOpen size={20} />
          <span>Language Learning</span>
        </Link>
        <Link
          href="/skills"
          className={`flex items-center gap-3 py-2 ${
            isActive("/skills")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <BarChart2 size={20} />
          <span>Skills</span>
        </Link>
        <Link
          href="/jobs"
          className={`flex items-center gap-3 py-2 ${
            isActive("/jobs")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <Briefcase size={20} />
          <span>Jobs</span>
        </Link>
        <Link
          href="/community"
          className={`flex items-center gap-3 py-2 ${
            isActive("/community")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <Users size={20} />
          <span>Community</span>
        </Link>
        {pathname === "/success-stories" && (
          <Link
            href="/success-stories"
            className={`flex items-center gap-3 py-2 ${
              isActive("/success-stories")
                ? "text-[#2273ce] font-medium"
                : "text-[#6a6a6a] hover:text-[#2273ce]"
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Success Stories</span>
          </Link>
        )}
      </nav>
      <div className="pt-6 border-t border-[#d9e0e7] space-y-4">
        <Link
          href="/settings"
          className={`flex items-center gap-3 py-2 ${
            isActive("/settings")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        <Link
          href="/help"
          className={`flex items-center gap-3 py-2 ${
            isActive("/help")
              ? "text-[#2273ce] font-medium"
              : "text-[#6a6a6a] hover:text-[#2273ce]"
          }`}
        >
          <HelpCircle size={20} />
          <span>Help</span>
        </Link>
      </div>
    </aside>
  );
}

// Export icons for use in the Layout component
export const BellIcon = Bell;
export const MessageSquareIcon = MessageSquare;
export const SettingsIcon = Settings;
export const HelpCircleIcon = HelpCircle;
export const HomeIcon = Home;
export const BarChart2Icon = BarChart2;
export const BookOpenIcon = BookOpen;
export const BriefcaseIcon = Briefcase;
export const UsersIcon = Users;
