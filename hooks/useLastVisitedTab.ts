"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { TAB_DEFINITIONS, TAB_STORAGE_KEY } from "@/constants/tabs";

const TAB_PATHS = TAB_DEFINITIONS.map((tab) => tab.href);

export function usePersistLastVisitedTab() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (!TAB_PATHS.includes(pathname as (typeof TAB_PATHS)[number])) return;

    window.localStorage.setItem(TAB_STORAGE_KEY, pathname);
  }, [pathname]);
}

export function useRestoreLastVisitedTab(fallbackPath: (typeof TAB_PATHS)[number]) {
  const router = useRouter();
  const hasRestoredRef = useRef(false);

  useEffect(() => {
    if (hasRestoredRef.current) return;
    hasRestoredRef.current = true;

    const storedPath = window.localStorage.getItem(TAB_STORAGE_KEY);
    const isValidStoredPath =
      storedPath && TAB_PATHS.includes(storedPath as (typeof TAB_PATHS)[number]);
    const targetPath = isValidStoredPath
      ? (storedPath as (typeof TAB_PATHS)[number])
      : fallbackPath;

    router.replace(targetPath);
  }, [fallbackPath, router]);
}

export function isTabPath(path?: string | null): path is (typeof TAB_PATHS)[number] {
  if (!path) return false;
  return TAB_PATHS.includes(path as (typeof TAB_PATHS)[number]);
}

export function getTabPaths() {
  return TAB_PATHS;
}
