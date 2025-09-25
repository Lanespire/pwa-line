"use client";

import { useRestoreLastVisitedTab } from "@/hooks/useLastVisitedTab";

const DEFAULT_TAB_PATH = "/home" as const;

export default function IndexPage() {
  useRestoreLastVisitedTab(DEFAULT_TAB_PATH);

  return <main className="min-h-screen bg-slate-50" aria-hidden />;
}
