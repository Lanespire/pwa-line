"use client";

import { usePathname } from "next/navigation";

import { TAB_DEFINITIONS } from "@/constants/tabs";
import { usePersistLastVisitedTab } from "@/hooks/useLastVisitedTab";

import { TabBarItem } from "./TabBarItem";

export default function TabBar() {
  const pathname = usePathname();
  usePersistLastVisitedTab();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-xl px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
        <ul className="flex justify-between gap-1">
          {TAB_DEFINITIONS.map((tab) => (
            <TabBarItem key={tab.id} tab={tab} isActive={pathname === tab.href} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
