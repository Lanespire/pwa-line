"use client";

import Link from "next/link";
import clsx from "clsx";

import type { TabDefinition } from "@/constants/tabs";

type TabBarItemProps = {
  tab: TabDefinition;
  isActive: boolean;
};

export function TabBarItem({ tab, isActive }: TabBarItemProps) {
  return (
    <li className="flex flex-1">
      <Link
        href={tab.href}
        className={clsx(
          "flex w-full flex-col items-center gap-1 rounded-md px-2 py-2 text-xs font-medium transition-colors",
          isActive ? "text-emerald-600" : "text-slate-500 hover:text-slate-700",
        )}
        aria-current={isActive ? "page" : undefined}
      >
        <span>{tab.label}</span>
        <span
          className={clsx(
            "block h-1 w-8 rounded-full bg-transparent transition-colors",
            isActive ? "bg-emerald-500" : "bg-transparent",
          )}
        />
      </Link>
    </li>
  );
}
