"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MessageCircle,
  TrendingUp,
  User,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type BottomNavTab = "today" | "coach" | "meals" | "progress" | "profile";

export interface BottomNavItem {
  id: BottomNavTab;
  label: string;
  href: string;
  icon: LucideIcon;
}

export const BOTTOM_NAV_ITEMS: BottomNavItem[] = [
  { id: "today", label: "Today", href: "/today", icon: CalendarDays },
  { id: "coach", label: "Coach", href: "/coach", icon: MessageCircle },
  { id: "meals", label: "Meals", href: "/meals", icon: UtensilsCrossed },
  { id: "progress", label: "Progress", href: "/progress", icon: TrendingUp },
  { id: "profile", label: "Profile", href: "/profile", icon: User },
];

interface BottomNavigationProps {
  activeTab?: BottomNavTab;
  className?: string;
}

function resolveActiveTab(pathname: string): BottomNavTab {
  const match = BOTTOM_NAV_ITEMS.find(
    (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
  );
  return match?.id ?? "today";
}

export function BottomNavigation({
  activeTab,
  className,
}: BottomNavigationProps) {
  const pathname = usePathname();
  const currentTab = activeTab ?? resolveActiveTab(pathname);

  return (
    <nav
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6 sm:px-6",
        className
      )}
      aria-label="Main navigation"
    >
      <div
        className={cn(
          "pointer-events-auto flex w-full max-w-md items-center justify-between",
          "rounded-[1.75rem] border border-white/60 bg-white/75 p-2 shadow-card backdrop-blur-xl",
          "supports-[backdrop-filter]:bg-white/65"
        )}
      >
        {BOTTOM_NAV_ITEMS.map((item) => {
          const isActive = currentTab === item.id;
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex flex-1 flex-col items-center justify-center py-2"
              aria-current={isActive ? "page" : undefined}
            >
              {isActive ? (
                <motion.span
                  layoutId="bottom-nav-active"
                  className="absolute inset-1 rounded-2xl bg-atlas-primary/[0.06]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              ) : null}

              <span className="relative z-10 flex flex-col items-center gap-1">
                <motion.span
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    color: isActive ? "#2563EB" : "#64748B",
                  }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={isActive ? 2.25 : 1.75}
                    aria-hidden
                  />
                </motion.span>
                <motion.span
                  className="text-[10px] font-medium tracking-wide sm:text-xs"
                  animate={{
                    color: isActive ? "#0F172A" : "#64748B",
                    opacity: isActive ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
