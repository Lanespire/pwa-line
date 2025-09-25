export type TabIdentifier = "home" | "talks" | "voom" | "news" | "wallet";

export type TabDefinition = {
  id: TabIdentifier;
  href: `/${TabIdentifier}`;
  label: string;
};

export const TAB_DEFINITIONS: TabDefinition[] = [
  { id: "home", href: "/home", label: "Home" },
  { id: "talks", href: "/talks", label: "トーク" },
  { id: "voom", href: "/voom", label: "VOOM" },
  { id: "news", href: "/news", label: "ニュース" },
  { id: "wallet", href: "/wallet", label: "ウォレット" },
];

export const TAB_STORAGE_KEY = "last-visited-tab";
