import type { ReactNode } from "react";

import TabBar from "@/components/navigation/TabBar";

export default function TabsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <main className="flex-1 pb-[calc(env(safe-area-inset-bottom)+4.5rem)]">{children}</main>
      <TabBar />
    </div>
  );
}
